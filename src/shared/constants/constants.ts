export enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

export interface State<T> {
  products: T[];
  loading: keyof typeof STATUS;
  error: string;
}
