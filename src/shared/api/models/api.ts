export interface FetcherI {
  post<T, B>(url: string, body: B): Promise<T>;
  get<T>(url: string, token?: string): Promise<T>;
}

export class Fetcher {
  constructor(public instance: FetcherI) {}

  get<T>(url: string, token?: string): Promise<T> {
    return this.instance.get(url, token);
  }

  post<T, B>(url: string, body: B): Promise<T> {
    return this.instance.post(url, body);
  }
}
