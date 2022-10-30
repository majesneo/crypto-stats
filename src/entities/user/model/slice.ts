import { createSlice } from '@reduxjs/toolkit';
import { AuthJWT } from 'features/Authentication/thunk';
import { State, STATUS } from '../../../shared/constants/constants';
import { IUser } from './constants';


const initialState: State<IUser> = {
  essence: {},
  loading: STATUS.IDLE,
  error: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AuthJWT.fulfilled, (state, action) => {
        state.essence = action.payload
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
          state.loading = STATUS.IDLE;
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
