import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { view as wrap } from '../../articles-fetch-wrap/';
import { actions as fetchActions} from '../../constant/';
import { ArchiveList } from './archiveList.js';

const selectVarieties = (articleItems) => {
  const articleItemsData = articleItems.data;
  if (!articleItemsData) { //判断数据是否存在
    return false;
  } 
  const varieties = new Map();
  let temp = [];
  articleItemsData.map((item) => {
    const listItems = {
      id: item.id,
      title: item.title,
    };
    varieties.has(item.archive) ?  
    temp = varieties.get(item.archive) : temp = [];
    temp.push(listItems);
    varieties.set(item.archive, temp);
  })
  return varieties;
}

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
    articleItems: state.articleItems,
    varieties: selectVarieties(state.articleItems),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleItems: (num) => {
      dispatch(fetchActions.fetchAItems(num));
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(wrap(ArchiveList)));