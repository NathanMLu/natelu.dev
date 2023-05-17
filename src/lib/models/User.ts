export interface User {
    name?: string; //
    points: number;
    sessionId: string;
    levels: Levels;
}

interface Levels {
    // should keep track of which levels the user has completed

    // code here:
    levelOne: boolean;
    levelTwo: boolean;
    levelThree: boolean;
    levelFour: boolean;
    levelFive: boolean;
    levelSix: boolean;
    levelSeven: boolean;
    levelEight: boolean;
    levelNine: boolean;
    levelTen: boolean;
}