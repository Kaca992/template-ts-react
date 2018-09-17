import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from '@components/main/main';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import './style/index.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>, document.getElementById('root'),
);
