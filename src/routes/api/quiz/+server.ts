import {sql} from "@vercel/postgres"
import {quizPoints, quizzes} from "$lib/models/quiz";

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

        const user = await sql`SELECT *
                               FROM users
                               WHERE session_id = ${body.sessionId}`;
        if (user.rowCount === 0) {
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
            return new Response(JSON.stringify({error: "Incorrect answer"}), {
                status: 400,
            });
        }

        if (user.rows[0].quiz && user.rows[0].quiz.includes(quizName)) {
            await sql`UPDATE users
                      SET points = points + 1
                      WHERE session_id = ${body.sessionId}`;
        } else if (user.rows[0].quiz) {
            await sql`UPDATE users
                      SET points = points + ${quizPoints[quizName]},
                          quiz   = ARRAY_APPEND(quiz, ${quizName})
                      WHERE session_id = ${body.sessionId}`;
        } else {
            await sql`UPDATE users
                      SET points = points + ${quizPoints[quizName]},
                          quiz   = ARRAY [${quizName}]::text[]
                      WHERE session_id = ${body.sessionId}`;
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