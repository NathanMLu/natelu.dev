import {kv} from "@vercel/kv";
import {levelPoints} from "$lib/models/constants";

// POST /api/user/level: {sessionId: string, level: number}
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }
        console.log(`POST /api/user/level - sessionId: ${body.sessionId}`)

        if (!body.level && !isNaN(Number(body.level))) {
            return new Response(
                JSON.stringify({error: "level is required"}),
                {status: 400}
            );
        }
        const level = Number(body.level);

        const user = await kv.hgetall(`user:${body.sessionId}`);
        if (user === null) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        if (user[`level${level}`]) {
            // default to incrementing points by 1 if the user has already completed the level
            await kv.hincrby(`user:${body.sessionId}`, "points", 1);
        } else {
            await kv.hset(`user:${body.sessionId}`, {[`level${level}`]: true});
            await kv.hincrby(`user:${body.sessionId}`, "points", levelPoints[level]);
        }

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