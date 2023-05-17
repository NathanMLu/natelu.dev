import {kv} from "@vercel/kv";
import {defaultUserName, defaultUserPoints} from "$lib/constants";

// POST /api/user
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }

        await kv.hset(`user:${body.sessionId}`, {name: defaultUserName, points: defaultUserPoints});

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
};

// GET /api/user/:sessionId
export const GET = async ({ url }: { url: URL }) => {
    try {
        const sessionId = url.searchParams.get("sessionId");
        if (!sessionId) {
            return new Response(JSON.stringify({error: "sessionId is required"}), {
                status: 400,
            });
        }

        console.log(`GET /api/user - sessionId: ${sessionId}`);

        const response = await kv.hgetall(`user:${sessionId}`);
        if (response === null) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        return new Response(JSON.stringify(response), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({error: "Internal Server Error"}),
            {status: 500}
        );

    }
}