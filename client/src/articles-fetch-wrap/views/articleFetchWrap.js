import React from 'react';
import { connect } from 'react-redux';

import { view as ArticleList, actions as articleActions } from '../../articles/';
import * as articleWrapActions from '../actions.js';
import * as status from '../../status.js';

const renderNum = { //定义选择文章显示的数量,part默认为15条，在服务器端修改
  part: 'part',
  all: 'all',
}

class ArticleFetchWrap extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.props.renderNum(renderNum.part);
    const type = this.props.articleNum.num;
    this.props.fetchArticleInfo(type);
  }

  render() {
    const articleInfo = this.props.articleInfo;
    const articleNum = this.props.articleNum;
    return (
      <div>
        {
          articleInfo.status === status.SUCCESS ?
          (<ArticleList renderNum={articleNum.num} articleInfo={articleInfo.data} />) :
          (<div>{articleInfo.show}</div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleInfo: state.articleInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleInfo: (type) => {
      dispatch(articleActions.fetchArticle(type));
    },
    renderNum: (renderNum) => {
      dispatch(articleWrapActions.setNum(renderNum));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFetchWrap);