export const BASE_URL_USER = 'https://api.escuelajs.co/api/v1';
export const URL_PRODUCT = '/products';

export interface IUser {
  id?: number;
  name?: string;
  role?: string;
  email?: string;
  password?: string;
}
