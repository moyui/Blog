import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { view as wrap } from '../../articles-fetch-wrap/';
import { actions as fetchActions} from '../../constant/';
import { ArticleList } from './articleList.js';

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleItems: state.articleItems,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleItems: (num) => {
      dispatch(fetchActions.fetchAItems(num));
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(wrap(ArticleList)));