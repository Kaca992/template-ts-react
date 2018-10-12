export interface IAction {
    type: string;
    payload?: any;
    error?: any;
}

export interface IParticipantInfo {
    name: string;
    email: string;
    enrollmentYear: string;
    course: string;
    result: number;
    categoryId: number;
}