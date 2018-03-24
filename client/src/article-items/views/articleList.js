import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { ArticleItems } from './articleItems.js';

const ArticleList = ({articleData}) => {
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
          const status = item.status;//读取当前文章状态
          switch (status) {//根据状态渲染不同文章段
            case 'loading': {
              return (
                <div className="article-item">
                  <h3 className="article-item-title">{'加载进行中啊喵~'}</h3>
                </div>
              );
            }
            case 'success': {
              return (
                <ArticleItems key={item.id} id={item.id} {...item} />
              );
            }
            case 'failure': {
              return (
                <div className="article-item">
                  <h3 className="article-item-title">{'加载失败啊喵!'}</h3>
                </div>
              );
            }
            default: {
              throw new Error('unexpected status ' + status);
            }
          }
        })
      }
      </CSSTransitionGroup>
    </React.Fragment>
  );
};

export {ArticleList};