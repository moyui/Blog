import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';


import * as Status from '../../constant/status.js';

class ArticleInfo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleInfo: {},
      status: Status.LOADING,
    }
  }

  async fetchAInfo(id) {
    const apiUrl = `https://www.moyui.site/articleinfo/${id}`;
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
    const articleMatchId = this.props.match.params.id;//在articleList中利用:id匹配到的文章id
    this.fetchAInfo(articleMatchId);
  }

  render() {
    const {status, articleInfo} = this.state;
    return (
      <CSSTransitionGroup         
        transitionName="push"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={700}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
        <div className="article-info"> {
          (() => {
            switch(status) {
              case Status.LOADING: {return (<div>{'加载进行中啊喵~'}</div>)};
              case Status.SUCCESS: {return (
                <React.Fragment>
                  <h3 className="article-info-title">{articleInfo.title}</h3>
                  <br />
                  <p className="article-info-main">{articleInfo.page}</p>
                  <br />
                  <nav className="article-info-btn">
                    <button>
                      <Link to={`${articleInfo.previousPageId}`}>
                        <FontAwesomeIcon icon={faAngleLeft} />{`上一篇：${articleInfo.previousPageTitle}`}
                      </Link>
                    </button>
                    <button>
                      <Link to={`${articleInfo.nextPageId}`}>
                        {`下一篇：${articleInfo.nextPageTitle}`}<FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </button>
                  </nav>
                </React.Fragment>
              )};
            case Status.FAILURE: {return (<div>{'加载失败啊喵!'}</div>)};
              default: {throw new Error(`未知状态${this.status}`)};
            }
          })()
        }</div>
      </CSSTransitionGroup>
    )
  }
}

export default withRouter(ArticleInfo);



