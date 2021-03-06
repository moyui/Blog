import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';

import * as Status from '../../constant/status.js';

function ArticleInfo() {
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState(Status.LOADING);

  
}

class ArticleInfo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleInfo: {},
      status: Status.LOADING
    };
  }

  componentWillReceiveProps(nextProps) {
    const articleMatchIdPresent = this.props.match.params.id; //在articleList中利用:id匹配到的文章id
    const articleMatchIdNext = nextProps.match.params.id;
    if (articleMatchIdNext !== articleMatchIdPresent) {
      this.fetchAInfo(articleMatchIdNext);
      return true;
    } else {
      return false;
    }
  }

  async fetchAInfo(id, event) {
    const apiUrl = `/v1/article/${id}`;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      header: headers,
      mode: 'cors'
    };
    this.setState({ status: Status.LOADING });
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      this.setState({ status: Status.SUCCESS, articleInfo: responseJson.data });
    } catch (error) {
      this.setState({ status: Status.FAILURE });
    }
  }

  componentDidMount() {
    const articleMatchId = this.props.match.params.id; //在articleList中利用:id匹配到的文章id
    this.fetchAInfo(articleMatchId);
  }

  render() {
    const classPrefix = 'article-info';

    const { status, articleInfo } = this.state;
    return (
      <div className={`${classPrefix}-content`}>
        {' '}
        {(() => {
          switch (status) {
            case Status.LOADING: {
              return <div>{'加载进行中啊喵~'}</div>;
            }
            case Status.SUCCESS: {
              return (
                <React.Fragment>
                  <div className={`${classPrefix} ${classPrefix}-header`}>
                    <h3 className={`${classPrefix} ${classPrefix}-title`}>
                      {articleInfo.title}
                    </h3>
                  </div>
                  <article
                    className={`${classPrefix} ${classPrefix}-body`}
                    dangerouslySetInnerHTML={{ __html: articleInfo.page }}
                  />
                  <nav className={`${classPrefix} ${classPrefix}-nav`}>
                    <Link to={`/articleinfo/${articleInfo.previousPageId}`}>
                      <button>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        {`上一篇：${articleInfo.previousPageTitle}`}
                      </button>
                    </Link>
                    <Link to={`/articleinfo/${articleInfo.nextPageId}`}>
                      <button>
                        {`下一篇：${articleInfo.nextPageTitle}`}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </Link>
                  </nav>
                </React.Fragment>
              );
            }
            case Status.FAILURE: {
              return <div>{'加载失败啊喵!'}</div>;
            }
            default: {
              throw new Error(`未知状态${this.status}`);
            }
          }
        })()}
      </div>
    );
  }
}

export default withRouter(ArticleInfo);
