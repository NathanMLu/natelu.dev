import { kv } from "@vercel/kv";

export const POST = async ({ request }: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({ error: "sessionId is required" }),
                { status: 400 }
            );
        }

        await kv.hset(`user:${body.sessionId}`, { name: "temp", points: 0 });

        return new Response(JSON.stringify({ sessionId: body.sessionId }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
};
