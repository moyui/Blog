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
    const type = renderNum.part;
    this.props.renderNum(type);
    this.props.fetchArticleInfo(type);
  }

  render() {
    const { articleInfo, articleNum }= this.props;
    return (
      <div>
        {
          articleInfo.status === status.SUCCESS ?
          (<ArticleList
            renderNum={articleNum.num}
            articleInfo={articleInfo.data}
            articleStatus={articleInfo.status}/>) :
          articleInfo.show
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