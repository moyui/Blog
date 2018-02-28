import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Blog from './Blog.js';
import store from './Store.js';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Blog />
    </Router>
  </Provider>,
  document.getElementById('root')
)