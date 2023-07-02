export interface QuizOption {
    text: string;
    correct: boolean;
}

export interface Quiz {
    name: string;
    show?: boolean;
    question: string;
    options: QuizOption[];
}

export const quizzes: Quiz[] = [
    {
        name: "corelogic",
        question: "What is the capital of the United States?",
        options: [
            {text: "New York", correct: false},
            {text: "Washington, D.C.", correct: true},
            {text: "Los Angeles", correct: false},
            {text: "Chicago", correct: false},
        ]
    }];

export const QUIZ_DESCRIPTION: string = "Complete the quiz to earn points and spend them in the shop!";