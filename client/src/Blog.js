import React from 'react';

import { view as SideMenu } from './SideMenu/';
import { view as MainBody } from './MainBody/';

const Blog = () => {
  return (
    <div>
      <SideMenu />
      <MainBody />
    </div>
  );
};

export default Blog;