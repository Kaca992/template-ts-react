import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IRootReducerState } from '../../src/reducers/rootReducer';

export function getMockStore(initialState: Partial<IRootReducerState>) {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    return mockStore(initialState) as MockStoreEnhanced<IRootReducerState, {}>;
}
