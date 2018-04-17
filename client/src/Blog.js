import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader'

import { view as NavBar} from './nav-bar/';
import { view as SideMenu } from './side-menu/';
import { view as ArticleItems } from './article-items/';
import { view as ArticleInfo } from './article-info/';
import { view as NotFound } from './not-found/';
import { view as Archive } from './archive/';

import brand from './image/brand.jpg';

const Blog = () => {
  const classPerfix = 'root';

  return (
    <React.Fragment>
      <NavBar key={`${classPerfix}-navbar`}/>
      <div key={`${classPerfix}-brand`} className="brand">
        <img className="brand-img" src={brand} />
      </div>
      <div key={`${classPerfix}-body`} className="body">
        <aside className="side-bar">
          <SideMenu />
        </aside>
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={ArticleItems} />
            <Route path="/home" component={ArticleItems} />
            <Route path="/articleinfo/:id" component={ArticleInfo} />
            <Route path="/archive" component={Archive} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
      <footer>
      </footer>
    </React.Fragment>
  );
};

export default hot(module)(Blog);