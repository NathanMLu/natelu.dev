import {sql} from "@vercel/postgres"
import {DEFAULT_USER_POINTS} from "$lib/models/constants";

// POST /api/user - {sessionId: string}
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }

        console.log(`POST /api/user - sessionId: ${body.sessionId}`)
        const user = await sql`SELECT * FROM users WHERE session_id = ${body.sessionId}`;
        if (user.rowCount > 0) {
            return new Response(JSON.stringify({error: "User already exists"}), {
                status: 400,
            });
        }
        await sql`INSERT INTO users (session_id, points) VALUES (${body.sessionId}, ${DEFAULT_USER_POINTS})`;

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
export const GET = async ({url}: { url: URL }) => {
    try {
        const sessionId = url.searchParams.get("sessionId");
        if (!sessionId) {
            return new Response(JSON.stringify({error: "sessionId is required"}), {
                status: 400,
            });
        }

        console.log(`GET /api/user - sessionId: ${sessionId}`);
        const response = await sql`SELECT * FROM users WHERE session_id = ${sessionId}`;
        if (response.rowCount === 0) {
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