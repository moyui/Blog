import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchHOC } from './fetchHOC/js';
import { view as articleItems} from '../../article-items/';

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleItems: state.articleItems,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleItems: (num) => {
      dispatch(fetchAItems(num));
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(fetchHOC(articleItems)));