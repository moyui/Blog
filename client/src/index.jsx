import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';

import { Provider } from 'react-redux';

import AppRouter from './router/index';

// import Blog from './Blog.js';
// import store from './Store.js';

// import './css/style.css';

ReactDOM.render(
  // <Provider store={store}>
  //   <Router>
  //     <Blog />
  //   </Router>
  // </Provider>,

  <AppRouter></AppRouter>,
  document.getElementById('root')
);
