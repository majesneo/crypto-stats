export const BASE_URL_PRODUCT = 'https://api.escuelajs.co/api/v1';
export const URL_PRODUCT = '/products';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: number;
  images: string[];
}
