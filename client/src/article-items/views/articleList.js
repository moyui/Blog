import React from 'react';

import { ArticleItems } from './articleItems.js';

const ArticleList = props => {
  const { articleData, clickCount } = props;
  return (
    <React.Fragment>
      {articleData.reverse().map(item => (
        <ArticleItems
          key={item.id}
          id={item.id}
          clickCount={clickCount}
          {...item}
        />
      ))}
    </React.Fragment>
  );
};

export { ArticleList };
