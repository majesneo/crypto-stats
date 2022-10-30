export enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

export interface State<T> {
  essence: T | T[] | null;
  loading: keyof typeof STATUS;
  error: string;
}
