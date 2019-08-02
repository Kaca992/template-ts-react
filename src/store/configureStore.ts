import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer, { RootReducerState } from '../reducers/rootReducer';

const middleware = [reduxThunk, reduxLogger];

function configureStore(initialState: Partial<RootReducerState> = {}) {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}

export default configureStore;
