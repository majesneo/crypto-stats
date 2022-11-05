export interface FetcherI {
  post<T>(url: string, data: T): Promise<T>;
  get<T>(url: string, token?: string): Promise<T>;
}

export class Fetcher {
  constructor(public instance: FetcherI) {}

  get<T>(url: string, token?: string): Promise<T> {
    return this.instance.get(url, token);
  }

  post<T>(url: string, data: T): Promise<T> {
    return this.instance.post(url, data);
  }
}
