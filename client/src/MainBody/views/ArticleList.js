import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Status from '../status.js';
import { ArticleItems } from './ArticleItems.js';

const ArticleList = ({mainbody}) => {
  return (
    <React.Fragment>
      {
        mainbody.map((item) => {
          const status = item.status;//读取当前文章状态
          switch (status) {//根据状态渲染不同文章段
            case Status.LOADING: {
              return (<div>{item.show}</div>);
            }
            case Status.SUCCESS: {
              return (
                <ArticleItems {...items} />
              );
            }
            case Status.FAILURE: {
              return (<div>{item.show}</div>);
            }
            default: {
              throw new Error('unexpected status ' + status);
            }
          }
        })
      }
    </React.Fragment>
  );
};

ArticleList.propTypes = {
  mainbody: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    mainbody: state.mainbody
  }
};

export default connect(mapStateToProps, null)(ArticleList);