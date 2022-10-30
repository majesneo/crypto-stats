import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IUser } from 'entities/user/model/constants';
import { Fetcher } from '../../shared/api/models/api';
import { Axios } from '../../shared/api/models/axios';
import { BASE_URL_AUTH, URL_AUTH } from './constants';

const api = new Fetcher(new Axios(BASE_URL_AUTH));

interface IAuthJWT {
  fetchData: { username: string, password: string },
  token: string
}

export const AuthJWT = createAsyncThunk(
  'AuthJWT',
  async ({ fetchData, token }: IAuthJWT, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ username: string, password: string }> = await api.post<IAuthJWT>(URL_AUTH, fetchData, token);
      return data;
    } catch (e) {
      return rejectWithValue('Fail loading products');
    }
  }
);