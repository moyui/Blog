import { SET_NUM } from './actionTypes.js';

export default (state = {num: 15}, action) => {//默认渲染15个条目
  switch (action.type) {
    case SET_NUM: {
      return {
        ...state,
        num: action.renderNum,
      }
    }
    default: {
      return state;
    }
  }
};