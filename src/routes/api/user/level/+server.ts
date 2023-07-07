import {sql} from "@vercel/postgres"
import {levelPoints} from "$lib/models/constants";

// POST /api/user/level - {sessionId: string, level: number}
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
        if (!body.level) {
            return new Response(
                JSON.stringify({error: "level is required"}),
                {status: 400}
            );
        }

        if (typeof body.level !== "number") {
            return new Response(
                JSON.stringify({error: "level must be a number"}),
                {status: 400}
            );
        }
        const level = Number(body.level);
        if (levelPoints[level] === undefined) {
            return new Response(
                JSON.stringify({error: `level ${level} does not exist`}),
                {status: 400}
            );
        }

        const user = await sql`SELECT * FROM users WHERE session_id = ${body.sessionId}`;
        if (user.rowCount === 0) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        if (user.rows[0].levels && user.rows[0].levels.includes(level)) {
            await sql`UPDATE users SET points = points + 1 WHERE session_id = ${body.sessionId}`;
        } else if (user.rows[0].levels) {
            await sql`UPDATE users SET points = points + ${levelPoints[level]}, levels = ARRAY_APPEND(levels, ${level}) WHERE session_id = ${body.sessionId}`;
        } else {
            await sql`UPDATE users SET points = points + ${levelPoints[level]}, levels = ARRAY[${level}]::integer[] WHERE session_id = ${body.sessionId}`;
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