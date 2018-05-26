import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from 'components/main/main';

import './style/index.scss';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root'),
);
