import { combineReducers } from 'redux';
import appReducer, { IAppReducerState } from './appReducer';

const rootReducer = combineReducers({
    app: appReducer
});

export interface IRootReducerState {
    app: IAppReducerState;
}

export default rootReducer;
