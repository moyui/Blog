import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { view as ArticleList } from '../../articles/';
import { actions as articleActions } from '../../articles/';
import * as articleWrapActions from '../actions.js';
import * as status from '../../status.js';

class ArticleFetchWrap extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      renderNum: 15
    }
  }

  async componentDidMount() {//声明周期函数变成异步？？？
    let status, articleNum;
    do {
      await fetchArticleInfo();
      status = this.props.articleNum.status,
      articleNum = this.props.articleNum.data//具体情况看
    } while (status !== status.SUCCESS)
    const renderNum = this.state.renderNum;
    for (let i = 0; i < renderNum; i++) { //不知道有什么好的替代方法
      this.props.fetchArticleInfo(articleNum--);
    }
  }

  render() {
    return (
      <div>
        <ArticleList {...articleInfo}/>
      </div>
    );
  }
}

ArticleFetchWrap.propTypes = {
  articleNum: PropTypes.Number,
  articleInfo: PropTypes.Array,
}

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleInfo: state.articleInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleInfo: (id) => {
      dispatch(articleActions.fetchArticle(id));//之后要继续修改
    },
    fetchArtccleNum: () => {
      dispatch(articleWrapActions.fetchANum());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFetchWrap);