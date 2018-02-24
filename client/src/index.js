import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Blog from './Blog.js';


ReactDOM.render(
  <Router>
   <Blog />
  </Router>,
  document.getElementById('root')
)