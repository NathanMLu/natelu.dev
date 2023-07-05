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
        question: "What is my role at CoreLogic?",
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
    }];

export const quizPoints: { [key: string]: number } = {
    "corelogic": 25,
    "ut": 30,
}

export const QUIZ_DESCRIPTION: string = "Complete the quiz to earn points and spend them in the shop!";