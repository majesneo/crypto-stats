import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Fetcher } from '../../../shared/api/models/api';
import { Axios } from '../../../shared/api/models/axios';
import { BASE_URL_PRODUCT, IProduct, URL_PRODUCT } from './constants';

const api = new Fetcher(new Axios(BASE_URL_PRODUCT));

export const getProducts = createAsyncThunk(
  'getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse = await api.get<AxiosResponse>(URL_PRODUCT);
      return data;
    } catch (e) {
      return rejectWithValue('Fail loading products');
    }
  }
);

export const getProduct = createAsyncThunk(
  'getProduct',
  async (productID, { rejectWithValue }) => {
    try {
      return await api.get<IProduct[]>(`${URL_PRODUCT}/${productID}`);
    } catch (e) {
      return rejectWithValue('Fail loading product');
    }
  }
);
