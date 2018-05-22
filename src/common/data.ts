export interface IQuestion {
    id: number;
    questionText: string;
    answers: IQuestionAnswer[];
}

export interface IQuestionAnswer {
    id: number;
    answerText: string;
}

export interface IParticipant {
    id?: number;
    name?: string;
    email?: string;
    course?: string;
    enrollmentYear?: string;
    result?: number;
    isConsentGiven?: boolean;
}

export interface IParticipantAnswers {
    questionId: number;
    answerId?: number;
}

export interface ITest {
    participant: IParticipant;
    answers: IParticipantAnswers[];
}

export interface IParticipantResult {
    correctAnswers: number;
    numberOfQuestions: number;
}
