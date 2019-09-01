import { FETCH_STARTED, FETCH_FAILURE, FETCH_SUCCESS } from './actionTypes.js';
import * as Status from './status.js';

export default (state = {status: Status.LOADING}, action) => {
  switch (action.type) {
    case FETCH_STARTED: {
      return {
        status: Status.LOADING
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        status: Status.SUCCESS,
        data: action.data,
      }
    }
    case FETCH_FAILURE: {
      return {
        status: Status.FAILURE,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
}