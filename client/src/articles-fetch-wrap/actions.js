import { SET_NUM } from './actionTypes.js';

export const setNum = (count) => {
  return {
    type: SET_NUM,
    count: count
  }
};
