import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer, { IRootReducerState } from '../reducers/rootReducer';

const middleware = [thunk, logger];

function configureStore(initialState: Partial<IRootReducerState> = {}) {
    const store: any = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}

export default configureStore;
