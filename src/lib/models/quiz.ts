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
        question: "What was my role at CoreLogic?",
        options: [
            {text: "Senior Software Engineer", correct: false},
            {text: "Machine Learning Engineer", correct: false},
            {text: "Associate Software Engineer", correct: true},
            {text: "Software Engineer Intern", correct: false}
        ]
    },
    {
        name: "ut",
        question: "What is my major at UT?",
        options: [
            {text: "Computer Science", correct: false},
            {text: "Electrical/Computer Engineering", correct: true},
            {text: "Business", correct: false},
            {text: "Computational Engineering", correct: false}
        ]
    },
    {
        name: "neurofix",
        question: "What do I sell on my ecommerce business?",
        options: [
            {text: "Furniture", correct: false},
            {text: "Electronics", correct: true},
            {text: "Clothing", correct: false},
            {text: "Books", correct: false}
        ]
    }
];

export const quizPoints: { [key: string]: number } = {
    "corelogic": 30,
    "ut": 30,
    "neurofix": 30
}

export const QUIZ_DESCRIPTION: string = "Complete the quiz to earn points and spend them in the shop!";