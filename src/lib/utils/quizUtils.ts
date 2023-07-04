import type {User} from "$lib/models/user";

export const completeQuiz = async (quizName: string, answer: string, user: User) => {
    const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quizName: quizName, answer: answer, sessionId: user.sessionId})
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error;
        throw new Error(errorMessage);
    }

    return true;
}