import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchAItemsStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchAItemsSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

export const fetchAItemsFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
};

export const fetchAItems = (type) => {
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
    dispatch(fetchAItemsStarted());
    try {
      let response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      let responseJson = await response.json();
      dispatch(fetchAItemsSuccess(responseJson.data));
    } catch(error) {
      dispatch(fetchAItemsFailure(error));
    }
  };
};