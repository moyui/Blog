import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { ListItems } from './ListItems.js';

const List = () => {
  return (
    <Router >
      <div>
        <ListItems />
        <Switch>
          <Route exact path="/" component={} />
          <Route path="/home" component={} />
          <Route path="/archive" component={} />
          <Route path="*" component={} />
        </Switch>
      </div>
    </Router>
  );
};

export {List};