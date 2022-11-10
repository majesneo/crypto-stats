import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IUser } from '../../entities/user/model/constants';
import { Fetcher } from '../../shared/api/models/api';
import { Axios } from '../../shared/api/models/axios';
import { BASE_URL_AUTH, URL_AUTH, URL_AUTH_CURRENT_SESSION } from './constants';

const api = new Fetcher(new Axios(BASE_URL_AUTH));
interface ILogin {
  email: string;
  password: string;
}

export const Login = createAsyncThunk(
  'Login',
  async ({ email, password }: ILogin, { rejectWithValue }) => {
    try {
      const {
        data: { access_token },
      } = await api.post<AxiosResponse<{ access_token: string }>>(URL_AUTH, {
        email,
        password,
      });

      return access_token;
    } catch (e) {
      console.error(e);
      return rejectWithValue('Fail AuthJWT');
    }
  }
);

export const AuthJWT = createAsyncThunk(
  'AuthJWT',
  async (token, { rejectWithValue }) => {
    try {
      console.log('AuthJWT');

      const { data } = await api.get<AxiosResponse<IUser>>(
        URL_AUTH_CURRENT_SESSION,
        token
      );

      return data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('Fail AuthJWT');
    }
  }
);