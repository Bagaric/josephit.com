import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import 'bootstrap';

import App from './components/App';

const rootEl = document.getElementById('root');

render(
  <Router history={history}>
    <Route component={App} path="/" />
  </Router>,
  rootEl
);