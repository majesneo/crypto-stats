export interface FetcherI {
  post<T> (url: string, data: T, token: string): Promise<T>;
  get<T> (url: string): Promise<T>;
}

export class Fetcher {
  constructor(public instance: FetcherI) { }

  get<T> (url: string): Promise<T> {
    return this.instance.get(url);
  }

  post<T> (url: string, data: T, token: string): Promise<T> {
    return this.instance.post(url, data, token);
  }
}
