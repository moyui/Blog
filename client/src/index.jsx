import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';

import AppRouter from './router/index';

import 'github-markdown-css';

ReactDOM.render(
  <AppRouter></AppRouter>,
  document.getElementById('root')
);
