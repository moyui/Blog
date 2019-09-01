export async function request({ url = '', body = {}, method = 'get' }) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  const init = {
    method: method.toUpperCase(),
    headers,
    body
  };
  try {
    const response = await fetch(url, init);
    if (
      ((response.status >= 200 && response.status < 300) ||
        response.status === 304) &&
      response.ok == true
    ) {
      return response.json();
    }
  } catch (e) {
    throw e;
  }
}
