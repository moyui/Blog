import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchANumStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchANumSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

export const fetchANumFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export const fetchANum = (id) => {//传入id要处理
  return async (dispatch) => {
    const apiUrl = `/XXXX`;

    dispatch(fetchANumStarted());

    try {
      let response = await fetch(apiUrl);//
      if (response.status !== 200) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      let responseJson = await response.json();

      dispatch(fetchANumSuccess(responseJson.BlogInfo))
    } catch (error) {
      dispatch(fetchANumFailure(error));
    }
  }
}
