import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { view as NavBar} from './nav-bar/';
import { view as SideMenu } from './side-menu/';
import { view as ArticleItems } from './article-items/';
import { view as ArticleInfo } from './article-info/';
import { view as NotFound } from './not-found/';
import { view as Archive } from './archive/';

const Blog = () => {
  const classPerfix = 'root';

  return (
    <React.Fragment>
      <NavBar key={`${classPerfix}-navbar`}/>
      <div key={`${classPerfix}-brand`} className="brand"></div>
      <div key={`${classPerfix}-body`} className="body">
        <SideMenu />
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={ArticleItems} />
            <Route path="/home" component={ArticleItems} />
            <Route path="/articleinfo/:id" component={ArticleInfo} />
            <Route path="/articleinfo" component={ArticleInfo} />
            <Route path="/archive" component={Archive} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;