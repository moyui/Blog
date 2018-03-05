import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as articleInfoActions from '../actions.js';

class ArticleInfo extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    const articleInfo = this.props.articleInfo;
    try {
      this.props.fetchArticleInfo(articleInfo.id);
    } catch(error) {
      this.props.fetchArticleInfoFailure();
    }
  }

  render() {
    const articleInfo = this.props.articleInfo;

    return (
        articleInfo.Status === 'Success' ? 
        (<div>
          <title>{articleInfo.title}</title>
          <p>{articleInfo.page}</p>
          <button><Link to={articleInfo.previous}>上一篇</Link></button>
          <button><Link to={articleInfo.next}>下一篇</Link></button>
        </div>) : 
        (<div>{articleInfo.show}</div>)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleInfo: state.articleInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleInfo: (id) => {
      dispath(articleInfoActions.fetchAInfo(id));
    },
    fetchArticleInfoFailure: () => {
      dispatch(articleInfoActions.fetchAInfoFailure());
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleInfo));


