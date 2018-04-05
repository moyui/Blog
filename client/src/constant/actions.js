import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchAItemsStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchAItemsSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data,
  }
};

export const fetchAItemsFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export const fetchAItems = (num) => {
  return async (dispatch) => {
    const apiUrl = `https://www.moyui.site/articleitems?limit=${num}&page=1`;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const init = {
      method: 'get',
      headers: headers,
      mode: 'cors'
    };
    
    dispatch(fetchAItemsStarted());

    try {
      const response = await fetch(apiUrl, init);
      if (response.status !== 200 || response.ok !== true) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      const responseJson = await response.json();
      
      dispatch(fetchAItemsSuccess(responseJson.data));

    } catch(error) {
      console.log(error);
      
      dispatch(fetchAItemsFailure(error));
    }
  }
}