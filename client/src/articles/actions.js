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

export const fetchArticle = (type) => {
  return async (dispatch) => {
    const apiUrl = 'http://127.0.0.1:8000/articleinfo';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      body: {
        "rendernum": "part"
      },
      headers: headers,
      mode: 'cors'
    };
    console.log(apiUrl);
    dispatch(fetchArticleStarted());
    try {
      let response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      let responseJson = await response.json();
      dispatch(fetchArticleSuccess(responseJson.data));
    } catch(error) {
      dispatch(fetchArticleFailure(error));
    }
  };
};