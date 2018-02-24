import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';
import { STATUS_LOADING, STATUS_SUCCESS, STATUS_FAILURE } from './status.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return [
        {
          status: STATUS_LOADING
        },
        ...state
      ]
    }
    case FETCH_SUCCESS: {
      return [
        {
          status: STATUS_SUCCESS
          ...action.data
        }
        ...state
      ]
    }
    case FETCH_FAILURE: {
      return [
        {
          status: STATUS_FAILURE,
          show: '加载失败啊喵~'
        }
      ]
    }
    default : {
      return state;
    }
  }
};