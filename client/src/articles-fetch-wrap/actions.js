import { SET_NUM } from './actionTypes.js';

export const setNum = (renderNum) => {
  return {
    type: SET_NUM,
    renderNum: renderNum
  }
};
