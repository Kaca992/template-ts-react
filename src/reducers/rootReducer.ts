import { combineReducers } from 'redux';
import appReducer, { AppReducerState } from './appReducer';

const rootReducer = combineReducers({
    app: appReducer
});

export interface RootReducerState {
    app: AppReducerState;
}

export default rootReducer;
