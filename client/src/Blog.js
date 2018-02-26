import React from 'react';
import { connect } from 'react-redux';

import { view as SideMenu } from '../SideMenu/';
import { view as MainBodyWrap } from '../ArticleFetchWrap/';

const Blog = () => {
  return (
    <div>
      <SideMenu />
      <MainBodyWrap />
    </div>
  );
};

export default Blog;