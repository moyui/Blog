import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';
import * as Status from '../status.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return [
        {
          status: Status.LOADING,
          show: '加载进行中啊喵~',
        },
        ...state
      ]
    }
    case FETCH_SUCCESS: {
      return [
        {
          status: Status.SUCCESS,
          ...action.data,
        },
        ...state
      ]
    }
    case FETCH_FAILURE: {
      return [
        {
          status: Status.FAILURE,
          show: '加载失败啊喵~',
        },
        ...state
      ]
    }
    default : {
      return state;
    }
  }
};