import { Action } from '../common/appDataStructures';

export interface AppReducerState {}

const initialState: AppReducerState = {};

export default function appReducer(state: AppReducerState = initialState, action: Action = { type: '', payload: null }): AppReducerState {
    return state;
}
