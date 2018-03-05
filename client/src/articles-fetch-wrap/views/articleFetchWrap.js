import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { view as ArticleList } from '../../article-items/';
import * as articleWrapActions from '../actions.js';
import * as status from '../../status.js';

const renderNum = { //定义选择文章显示的数量,part默认为15条，在服务器端修改
  part: 15,
  all: 'all'
}

class ArticleFetchWrap extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      articleItems: [],
      status: ''
    }
  }

  async fetchAItems(type) {
    const apiUrl = 'http://127.0.0.1:8000/articleitems';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      body: {
        renderNum: type
      },
      headers: headers,
      mode: 'cors'
    };
    this.setState({status: status.LOADING});
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      this.setState({articleItems: responseJson, status: status.SUCCESS});
    } catch(error) {
      this.setState({status: status.FAILURE});
    }
  }

  componentDidMount() {
    const type = renderNum.part;
    this.props.renderNum(num); //
    this.fetchAItems(this.props.renderNum);  
  }

  render() {
    const status = this.state.status;

    return (
      <div> {
        () => {
          switch(status) {
            case status.LOADING: '加载进行中啊喵~';
            case status.SUCCESS: 
            (<ArticleList articleItemsData={this.state.articleItems}
                          articleItemsStatus={this.state.status}/>);
            case status.FAILURE: '加载失败啊喵!';
            default: throw new Error(`未知状态${status}`);
          }
        }
      }</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleNum: state.articleNum,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    renderNum: (renderNum) => {
      dispatch(articleWrapActions.setNum(renderNum));
    }
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleFetchWrap));