import {sql} from "@vercel/postgres"

// GET /api/user/points/:sessionId
export const GET = async ({url}: { url: URL }) => {
    try {
        const sessionId = url.searchParams.get("sessionId");
        if (!sessionId) {
            return new Response(JSON.stringify({error: "sessionId is required"}), {
                status: 400,
            });
        }
        console.log(`GET /api/user/points - sessionId: ${sessionId}`);

        const response = await sql`SELECT points FROM users WHERE session_id = ${sessionId}`;
        if (response.rowCount === 0) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        return new Response(JSON.stringify(response.rows[0]?.points), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({error: "Internal Server Error"}),
            {status: 500}
        );
    }
}
