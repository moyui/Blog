import React from 'react';
import { Route } from 'react-router-dom'

import { ArticleItems } from './ArticleItems.js';

const ArticleList = () => {
  return (
    <div>
      <ArticleItems />
      <Route path="/" />
    </div>
  );
};

export default ArticleList;