import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from '../pages/index/index';
import ArticlePage from '../pages/articlePage/index';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/articlePage/:number" component={ArticlePage} />
      {/* <Route path="/users/" component={Users} /> */}
    </Router>
  );
}
