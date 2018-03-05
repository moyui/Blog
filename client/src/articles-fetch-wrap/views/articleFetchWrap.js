import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { view as ArticleList, actions as articleItemsActions } from '../../article-items/';
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
    this.props.fetchArticleItems(type);
  }

  render() {
    const { articleItems, articleNum }= this.props;
    return (
      <div>
        {
          articleItems.status === status.SUCCESS ?
          (<ArticleList
            renderNum={articleNum.num}
            articleItems={articleItems.data}
            articleStatus={articleItems.status}/>) :
          articleItems.show
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleItems: state.articleItems,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleItems: (type) => {
      dispatch(articleItemsActions.fetchAItems(type));
    },
    renderNum: (renderNum) => {
      dispatch(articleWrapActions.setNum(renderNum));
    }
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleFetchWrap));