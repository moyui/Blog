import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as Status from '../../status.js';

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
    this.setState({status: Status.LOADING});
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      this.setState({status: Status.SUCCESS, articleInfo: responseJson});
    } catch(error) {
      this.setState({status: Status.FAILURE});
    }
  }

  componentDidMount() {
    const articleMatch = this.props.match;//在articleList中利用:id匹配到的文章id
    this.fetchAInfo(articleMatch.params.id);
  }

  render() {
    const {status, articleInfo} = this.state;

    return (
      <div> {
        () => {
          switch(status) {
            case Status.LOADING: '加载进行中啊喵~';
            case Status.SUCCESS: (
              <React.Fragment>
                <title>{articleInfo.title}</title>
                <p>{articleInfo.page}</p>
                <button><Link to={articleInfo.previousPage}>上一篇</Link></button>
                <button><Link to={articleInfo.nextPage}>下一篇</Link></button>
              </React.Fragment>
            );
            case Status.FAILURE: '加载失败啊喵!';
            default: throw new Error(`未知状态${this.status}`);
          }
        }
      }</div>
    )
  }
}

export default withRouter(ArticleInfo);


