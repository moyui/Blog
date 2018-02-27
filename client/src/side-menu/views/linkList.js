import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListItems } from './listItems.js';

const LinkList = () => {
  return (
    <div>
      <ListItems />
      <Switch>
        <Route exact path="/" />
        <Route path="/home" />
        <Route path="/article" />
        <Route path="/archive" />
        <Route path="*" />
      </Switch>
    </div>
  );
};

export {LinkList};