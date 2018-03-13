import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchHOC } from './fetchHOC/js';
import { view as archive} from '../../archive/';

const selectVarieties = (articleItems) => {
  const articleItemsData = articleItems.data; 
  const varieties = new Map();
  articleItemsData.map((item) => {
    const listItems = {
      id: item.id,
      title: item.title,
    }
    varieties.has(item.archive) ? 
    varieties.set(item.archive, varieties.get(item.archive).push(listItems)) :
    varieties.set(item.archive, [].push(listItems));
  })
  return varieties;
}


const mapStateToProps = (state) => {
  return {
    varieties: selectVarieties(state.articleItems),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleItems: (num) => {
      dispatch(fetchAItems(num));
    },
  }
};

function GG (articleItems) {
  const articleItemsData = articleItems.data; 
  const a = new Map();
  articleItemsData.map((item) => {
    const listItems = {
      id: item.id,
      title: item.title,
    }
    a.has(item.archive) ? 
    a.set(item.archive, a.get(item.archive).push(listItems)) :
    a.set(item.archive, [].push(listItems));
    return a;
  })
}