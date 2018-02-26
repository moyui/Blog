export { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export const fetchBlogStarted = () => {
  return {
    type: FETCH_STARTED
  }
};

export const fetchBlogSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

export const fetchBlogFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export const fetchBlog = () => {
  return async (dispatch) => {
    const apiUrl = `/XXXX`;

    dispatch(fetchBlogStarted);

    try {
      let response = await fetch(apiUrl);
      if (response.status !== 200) {
        throw new Error(`获取数据失败，错误代码:${response.status}`);
      }
      let responseJson = await response.json();

      dispatch(fetchBlogSuccess(responseJson.BlogInfo))
    } catch (error) {
      dispatch(fetchBlogFailure(error));
    }
  }
}
