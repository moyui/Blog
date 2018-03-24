import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


import Blog from './Blog.js';
import store from './Store.js';

import './css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Blog />
    </Router>
  </Provider>,
  document.getElementById('root')
)