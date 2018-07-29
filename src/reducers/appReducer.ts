import { IAction } from "@common/appDataStructures";

export interface IAppReducerState {

}

const initialState: IAppReducerState = {

};

export default function appReducer(state: IAppReducerState = initialState, action: IAction = { type: '', payload: null }): IAppReducerState {
    switch (action.type) {
        default:
            return state;
    }
}
