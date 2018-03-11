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
      status: Status.LOADING,
    }
  }

  async fetchAInfo(id) {
    const apiUrl = `http://45.32.203.201:443/articleinfo/${id}`;
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
      this.setState({status: Status.SUCCESS, articleInfo: responseJson.data});
    } catch(error) {
      this.setState({status: Status.FAILURE});
    }
  }

  componentDidMount() {
    const articleMatchId = this.props.match.params.id ? this.props.match.params.id : 'all';//在articleList中利用:id匹配到的文章id
    console.log(articleMatchId);
    this.fetchAInfo(articleMatchId);
  }

  render() {
    const {status, articleInfo} = this.state;
    return (
      <div className="article-info"> {
        (() => {
          switch(status) {
            case Status.LOADING: {return '加载进行中啊喵~'};
            case Status.SUCCESS: {return (
              <React.Fragment>
                <h3>{articleInfo.title}</h3>
                <p>{articleInfo.page}</p>
                <nav>
                  <button><Link to={`${articleInfo.previousPage}`}>上一篇</Link></button>
                  <button><Link to={`${articleInfo.nextPage}`}>下一篇</Link></button>
                </nav>
              </React.Fragment>
            )};
            case Status.FAILURE: {return '加载失败啊喵!'};
            default: {throw new Error(`未知状态${this.status}`)};
          }
        })()
      }</div>
    )
  }
}

export default withRouter(ArticleInfo);



