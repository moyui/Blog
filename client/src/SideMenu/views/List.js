import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ListItems } from './ListItems.js';

const List = () => {
  return (
    <Router>
      <div>
        <ListItems />
        <Switch>
          <Route exact path="/" />
          <Route path="/home" />
          <Route path="/archive" />
          <Route path="*" />
        </Switch>
      </div>
    </Router>
  );
};

export {List};