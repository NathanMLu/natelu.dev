import {kv} from "@vercel/kv";

// GET /api/user/points/:sessionId
export const GET = async ({ url }: { url: URL }) => {
    try {
        const sessionId = url.searchParams.get("sessionId");
        if (!sessionId) {
            return new Response(JSON.stringify({error: "sessionId is required"}), {
                status: 400,
            });
        }
        console.log(`GET /api/user/points - sessionId: ${sessionId}`);

        const response = await kv.hget(`user:${sessionId}`, "points");
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
