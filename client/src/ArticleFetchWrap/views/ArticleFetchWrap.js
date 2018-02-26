import React from 'react';
import { connnect } from 'react-redux';

import { view as ArticleList } from '../../MainBody/';
import actions as articleActions from '../../MainBody/';

class FetchWrap extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      renderNum: 15,//每一页渲染的文章条数,之后会用props代替
    }
  }

  componentDidMount() {
    const renderNum = this.state.renderNum;
    for (let i = 0; i < renderNum; i++) { //不知道有什么好的替代方法
      this.props.fetchInfo();
    }
  }

  render() {
    return (
      <div>
        <ArticleList/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => {
      dispatch(articleActions.fetchArticle(...));//之后要继续修改
    }
  }
};

export default connect(null, mapDispatchToProps)(FetchWrap);