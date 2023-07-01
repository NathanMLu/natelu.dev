import {kv} from "@vercel/kv";
import {MAX_MESSAGE_LENGTH, SHOP_ITEMS} from "$lib/models/river";

// POST /api/river
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }
        if (!body.name) {
            return new Response(
                JSON.stringify({error: "name is required"}),
                {status: 400}
            );
        }
        if (body.customMessage && body.customMessage.length > MAX_MESSAGE_LENGTH) {
            return new Response(
                JSON.stringify({error: "customMessage must be less than 100 characters"}),
                {status: 400}
            );
        }

        console.log(`POST /api/river - sessionId: ${body.sessionId}`)
        const user = await kv.hgetall(`user:${body.sessionId}`);
        if (user === null) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        const item = SHOP_ITEMS.find(item => item.name === body.name);
        if (!item) {
            return new Response(JSON.stringify({error: "Item not found"}), {
                status: 404,
            });
        }

        if (Number(user.points) < item.price) {
            return new Response(JSON.stringify({error: "Not enough points"}), {
                status: 400,
            });
        }

        const userItem = await kv.hgetall(`river:${body.sessionId}:${body.name}`);
        if (userItem !== null) {
            return new Response(JSON.stringify({error: "User already has item"}), {
                status: 400,
            });
        }

        await kv.hset(`user:${body.sessionId}`, {points: Number(user.points) - item.price});
        await kv.hset(`river:${body.sessionId}:${body.name}`, {
            name: body.name,
            customMessage: body.customMessage || "",
        });

        return new Response(JSON.stringify({sessionId: body.sessionId}), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({error: "Internal Server Error"}),
            {status: 500}
        );
    }
}


// GET /api/river/
export const GET = async ({url}: { url: URL }) => {
    try {
        console.log(`GET /api/river - sessionId: ${url.searchParams.get("sessionId")}`)
        const keys = await kv.keys("river:*");
        const river = await Promise.all(keys.map(async (key) => {
                return await kv.hgetall(key);
            }
        ));

        return new Response(JSON.stringify(river), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({error: "Internal Server Error"}),
            {status: 500}
        );
    }
};