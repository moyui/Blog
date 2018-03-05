import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as status from '../../status.js';

class ArticleInfo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleInfo: {},
      status: '',
    }
  }

  async fetchAInfo(id) {
    const apiUrl = 'http://127.0.0.1:8000/articleinfo';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      header: headers,
      mode: 'cors'
    };
    this.setState({status: status.LOADING});
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      this.setState({status: status.SUCCESS, articleInfo: responseJson});
    } catch(error) {
      this.setState({status: status.FAILURE});
    }
  }

  componentDidMount() {
    const articleMatch = this.props.match;//在articleList中利用:id匹配到的文章id
    this.fetchAInfo(articleMatch.params.id);
  }

  render() {
    const articleInfo = this.state.articleInfo;
    return (
        this.state.Status === 'Success' ? 
        (<div>
          <title>{articleInfo.title}</title>
          <p>{articleInfo.page}</p>
          <button><Link to={articleInfo.previousPage}>上一篇</Link></button>
          <button><Link to={articleInfo.nextPage}>下一篇</Link></button>
        </div>) : 
        (<div>{articleInfo.show}</div>)
    )
  }
}

export default withRouter(ArticleInfo);


