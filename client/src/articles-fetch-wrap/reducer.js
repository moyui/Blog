import { SET_NUM } from './actionTypes.js';

export default (state = {count: 15}, action) => {//默认渲染15个条目
  switch (action.type) {
    case SET_NUM: {
      return {
        ...state,
        count: action.count,
      }
    }
    default: {
      return state;
    }
  }
};