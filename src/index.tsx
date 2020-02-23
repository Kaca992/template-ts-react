import react from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import main from './components/main';
import configureStore from './store/configureStore';
import './style/index.scss';

const store = configureStore({});
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('root')
);
