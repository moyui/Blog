import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provier } from 'react-redux';

import Blog from './Blog.js';
import store from './Store.js';


ReactDOM.render(
  <Provier store={store}>
    <Router>
      <Blog />
    </Router>
  </Provier>,
  document.getElementById('root')
)