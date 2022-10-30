import { createSlice } from '@reduxjs/toolkit';
import { AuthJWT, Login } from '../../../features/Authentication/thunk';
import { State, STATUS } from '../../../shared/constants/constants';
import { IUser } from './constants';

type userState = State<IUser> & { token: string };

const initialState: userState = {
  essence: {},
  loading: STATUS.IDLE,
  error: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(AuthJWT.fulfilled, (state, action) => {
        state.essence = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith(`/loading`),
        (state) => {
          state.loading = STATUS.LOADING;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith(`/fulfilled`),
        (state) => {
          state.loading = STATUS.FULFILLED;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith(`/rejected`),
        (state, action) => {
          state.loading = STATUS.IDLE;
          state.error = action.payload || action.error.message;
        }
      );
  },
});
