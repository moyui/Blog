import  { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';
import * as Status from '../status.js';

export default (state = {
    status: Status.LOADING,
    show: '加载进行中啊喵~',
    }, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {
        status: Status.LOADING,
        show: '加载进行中啊喵~',
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        status: Status.SUCCESS,
        show: '加载成功啊喵~',
        ...action.data,
      }
    }
    case FETCH_FAILURE: {
      return {
        status: Status.FAILURE,
        show: '加载失败啊喵!',
      }
    }
    default: {
      return state
    }
  }
};
