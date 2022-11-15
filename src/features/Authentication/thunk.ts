import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IUser } from '../../entities/user/model/constants';
import { Fetcher } from '../../shared/api/models/api';
import { Axios } from '../../shared/api/models/axios';
import { BASE_URL_AUTH, URL_AUTH, URL_AUTH_CURRENT_SESSION } from './constants';

const api = new Fetcher(new Axios(BASE_URL_AUTH));
export const Login = createAsyncThunk<
  string,
  { email?: string; password?: string }
>('Login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data } = await api.post<
      AxiosResponse<{ access_token: string }>,
      { email?: string; password?: string }
    >(URL_AUTH, {
      email,
      password,
    });

    return data.access_token;
  } catch (e) {
    console.error(e);
    return rejectWithValue('Fail AuthJWT');
  }
});

export const AuthJWT = createAsyncThunk(
  'AuthJWT',
  async (token: string, { rejectWithValue }) => {
    try {
      const { data } = await api.get<AxiosResponse<IUser>>(
        URL_AUTH_CURRENT_SESSION,
        token
      );
      return data as IUser;
    } catch (e) {
      console.error(e);
      return rejectWithValue('Fail AuthJWT');
    }
  }
);
