import {quizPoints, quizzes} from "$lib/models/quiz";
import {kv} from "@vercel/kv";

// POST /api/quiz: {sessionId: string, quizName: string, answer: string}
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }

        console.log(`POST /api/quiz - sessionId: ${body.sessionId}`)
        if (!body.quizName) {
            return new Response(
                JSON.stringify({error: "quizName is required"}),
                {status: 400}
            );
        }

        if (!body.answer) {
            return new Response(
                JSON.stringify({error: "answer is required"}),
                {status: 400}
            );
        }

        const quizName = body.quizName;
        const answer = body.answer;

        const user = await kv.hgetall(`user:${body.sessionId}`);
        if (user === null) {
            return new Response(JSON.stringify({error: "User not found"}), {
                status: 404,
            });
        }

        const quiz = quizzes.find((quiz) => quiz.name === quizName);
        if (!quiz) {
            return new Response(JSON.stringify({error: "Quiz not found"}), {
                status: 404,
            });
        }

        const correct = quiz.options.find((option) => option.text === answer)?.correct;
        if (correct === undefined || !correct) {
            return new Response(JSON.stringify({error: "Invalid/incorrect answer"}), {
                status: 400,
            });
        }

        if (user[`quiz:${quizName}`]) {
            console.log(`User has already completed quiz ${quizName}`)
            await kv.hincrby(`user:${body.sessionId}`, "points", 1);
        } else {
            console.log(`User has not completed quiz ${quizName}`)
            await kv.hset(`user:${body.sessionId}`, {[`quiz:${quizName}`]: true});
            await kv.hincrby(`user:${body.sessionId}`, "points", quizPoints[quizName]);
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