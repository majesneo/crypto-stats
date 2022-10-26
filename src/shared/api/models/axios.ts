import axios, { AxiosInstance } from 'axios';
import { FetcherI } from './api';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

export class Axios implements FetcherI {
  private static instance: Axios;

  private get axiosInstance(): AxiosInstance {
    return this.axiosInitInstance(this.baseURL);
  }

  constructor(public baseURL: string) {
    if (Axios.instance) {
      return Axios.instance;
    } else {
      Axios.instance = this;
      this.axiosInitInstance(baseURL);
    }
  }

  axiosInitInstance(baseURL: string) {
    return axios.create({
      baseURL,
      headers,
      withCredentials: false,
    });
  }

  get<T>(url: string):Promise<T> {
    return this.axiosInstance.get(url);
  }
}
