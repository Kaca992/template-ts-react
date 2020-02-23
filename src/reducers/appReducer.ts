export interface AppReducerState {}

const initialState: AppReducerState = {};

export default function appReducer(state: AppReducerState = initialState, action = { type: '', payload: null }): AppReducerState {
    return state;
}
