import React from 'react';
import { connect } from 'react-redux';

import { view as SideMenu } from './side-menu/';
import { view as ArticleBodyWrap } from './articles-fetch-wrap/';

const Blog = () => {
  return (
    <div>
      <SideMenu />
      <ArticleBodyWrap />
    </div>
  );
};

export default Blog;