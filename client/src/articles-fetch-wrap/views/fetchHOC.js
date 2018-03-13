import React from 'react';
import { connect } from 'react-redux';

import { fetchAItems } from '../../constant/actions.js';
import { setNum } from '../actions.js';

export const fetchHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component {
    constructor() {
      super (...arguments);
    }

    componentDidMount() {
      const articleNum = this.props.articleNum
      fetchArticleItems(articleNum);
    }

    render() {
      const {status, data} = this.props.articleItems;

      return (
        <React.Fragment>{
          (() => {
            switch(status) {
              case Status.LOADING: {return '加载进行中啊喵~'};
              case Status.SUCCESS: 
                return (<WrappedComponent {...this.props.articleItems}/>);
              case Status.FAILURE: {return '加载失败啊喵!'};
              default: {throw new Error(`未知状态${status}`)};
            }
          })()
        }</React.Fragment>
      );
    }
  }
};
