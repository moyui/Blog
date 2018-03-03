import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionsTypes.js';

export const fetchArticleStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchArticleSuccess = (data) => {
  return {
    type: FETCH_STARTED,
    data
  }
};

export const fetchArticleFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
};

export const fetchArticle = (id) => {
  return async (dispatch) => {
    const apiUrl = 'http://127.0.0.0:8080/articleinfo';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      body: {
        'articleId': id
      },
      header: headers,
      mode: 'cors'
    };
  
    dispatch(fetchArticleStarted());
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      dispatch(fetchArticleStarted(responseJson.data));
    } catch(error) {
      dispatch(fetchArticleFailure(error));
    }
  };
};