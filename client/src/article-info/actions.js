import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchAInfoStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchAInfoSuccess = (data) => {
  return {
    type: '@@RESET',
    data
  }
};

export const fetchAInfoFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
};

export const fetchAInfo = (id) => {
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
  
    dispatch(fetchAInfoStarted());
    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      dispatch(fetchAInfoSuccees(responseJson.data));
    } catch(error) {
      dispatch(fetchAInfoFailure(error));
    }
  };
};