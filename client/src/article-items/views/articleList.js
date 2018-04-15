import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { ArticleItems } from './articleItems.js';

const ArticleList = (props) => {
  const { articleData, clickCount } = props;
  return (
    <React.Fragment>
      <CSSTransitionGroup
        transitionName="push"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={700}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
      {
        articleData.map((item) => {
          return ( <ArticleItems key={item.id} id={item.id} clickCount={clickCount} {...item}/>);
        })
      }
      </CSSTransitionGroup>
    </React.Fragment>
  );
};

export {ArticleList};