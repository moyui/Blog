import axios, { AxiosRequestConfig } from 'axios';
import type { Response } from './index.d';

const instance = axios.create({
  timeout: 30000,
  withCredentials: true,
  responseType: 'json',
  maxContentLength: 10000
});

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
  return new Promise((resolve, reject) => {
    instance
      .get<Response<T>>(url, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
