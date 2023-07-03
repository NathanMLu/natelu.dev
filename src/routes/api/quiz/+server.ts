import {quizPoints, quizzes} from "$lib/models/quiz";
import {kv} from "@vercel/kv";

// POST /api/quiz/answer: {sessionId: string, quizName: string, answer: string}
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.sessionId) {
            return new Response(
                JSON.stringify({error: "sessionId is required"}),
                {status: 400}
            );
        }

        console.log(`POST /api/quiz/answer - sessionId: ${body.sessionId}`)
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
        if (correct === undefined) {
            return new Response(JSON.stringify({error: "Invalid answer"}), {
                status: 400,
            });
        }

        // check if user has already answered this quiz, if so, just give 1 point, otherwise give points for the quiz


        return new Response(JSON.stringify({correct}), {
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