import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import { fetchAItems } from '../../constant/actions.js';
import { setNum } from '../actions.js';
import * as Status from '../../constant/status.js';

const fetchHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component {
    constructor() {
      super (...arguments);

      this.onClickCount = this.onClickCount.bind(this);
    }

    componentDidMount() {
      const articleNum = this.props.articleNum;
      this.props.fetchArticleItems(articleNum.count);
    }

    async onClickCount(event, id) {
      const apiUrl = `/v1/article/${id}/readtimes`;
      const headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      const init = {
        method: 'post',
        headers: headers,
        mode: 'cors',
      };
      try {
        await fetch(apiUrl, init);
      } catch(error) {
        console.error(`发送失败啊喵！:${error}`);
      }
    }

    render() {
      const {status, data} = this.props.articleItems;
      const varieties = this.props.varieties;
      
      return (
        <React.Fragment>
          <CSSTransitionGroup
            transitionName="push"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={700}
            transitionAppear={true}
            transitionAppearTimeout={1000}>
          {
            (() => {
              switch(status) {
                case Status.LOADING: {
                  return (                 
                    <div className="article-item">
                      <p className="article-item-abstract">{'加载进行中啊喵~'}</p>
                    </div>
                  );
                }
                case Status.SUCCESS: 
                  return (<WrappedComponent 
                            articleData={data} 
                            varieties={varieties} 
                            clickCount={this.onClickCount}
                          />);
                case Status.FAILURE: {
                  return (                
                    <div className="article-item">
                      <p className="article-item-abstract">{'加载失败啊喵!'}</p>
                    </div>
                  );
                }
                default: {throw new Error(`未知状态${status}`)};
              }
           })()
          }
          </CSSTransitionGroup>
        </React.Fragment>
      );
    }
  }
};

export default fetchHOC;
