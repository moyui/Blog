import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from '../pages/index/index';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      {/* <Route path="/about/" component={About} /> */}
      {/* <Route path="/users/" component={Users} /> */}
    </Router>
  );
}
