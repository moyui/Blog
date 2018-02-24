import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchArticleStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchArticleSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

export const fetchArticleFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
};

export const fetchArticle = async () => {
  return (dispatch) => {
    const apiUrl = `/XXXX`;

    dispatch(fetchArticleStarted());

    try {
      let response = await fetch(apiUrl);
      if (response.status !== 200) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      let responseJSON = await response.json();

      dispatch(fetchArticleSuccess(responseJSON));
    } catch(error) {
      dispatch(fetchArticleFailure(error));
    }
  };
};