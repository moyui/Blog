import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Blog from './Blog.js';
import store, { history } from './Store.js';
import { ConnectedRouter } from 'react-router-redux'

import './css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Blog />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)