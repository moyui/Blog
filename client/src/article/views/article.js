import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as articleActions from '../actions.js';

class Article extends React.Component {
  constructors() {
    super(...arguments);
  }

  componentDidMount() {
    this.props.fetchArticle(001);
  }

  render() {
    const articleInfo = this.props.articleInfo.data;

    return(
      <div>
        <title>{articleInfo.title}</title>
        <p>{articleInfo.page}</p>
        <button><Link to={articleInfo.previous}>上一篇</Link></button>
        <button><Link to={articleInfo.next}>下一篇</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleInfo: state.articleInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => {
      dispath(articleActions.fetchArticle(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);


