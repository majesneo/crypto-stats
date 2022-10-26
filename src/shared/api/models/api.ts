export interface FetcherI {
  get<T>(url: string): Promise<T>;
}

export class Fetcher {
  constructor(public instance: FetcherI) {
  }

  get<T>(url: string): Promise<T> {
    return this.instance.get(url);
  }
}
