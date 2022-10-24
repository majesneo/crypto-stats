export interface FetcherI {
  get(url: string): Promise<any>;
}

export class Fetcher {
  constructor(public instance: FetcherI) {}

  get(url: string): Promise<any> {
    return this.instance.get(url);
  }
}
