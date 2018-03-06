import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { view as NavBar} from './nav-bar/';
import { view as SideMenu } from './side-menu/';
import { view as ArticleBodyWrap } from './articles-fetch-wrap/';
import { view as ArticleInfo } from './article-info/';

const Blog = () => {
  return (
    <React.Fragment>
      <nav className="navBar">
        <NavBar />
      </nav>
      <div className="body">
        <div className="sideBar">
          <SideMenu />
        </div>
        <div className="mainBody">
          <Switch>
            <Route exact path="/" component={ArticleBodyWrap}/>
            <Route path="/home" component={ArticleBodyWrap}/>
            <Route path="/articleinfo/:id" component={ArticleInfo} />
            <Route path="/articleinfo" component={ArticleInfo} />
            <Route path="/archive" />
            <Route path="*" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;