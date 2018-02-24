import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListItems } from './ListItems.js';

const MenuList = () => {
  return (
    <div>
      <ListItems />
      <Switch>
        <Route exact path="/" />
        <Route path="/home" />
        <Route path="/archive" />
        <Route path="*" />
      </Switch>
    </div>
  );
};

export {MenuList};