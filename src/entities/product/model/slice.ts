import { createSlice } from '@reduxjs/toolkit';
import { State, STATUS } from '../../../shared/constants/constants';
import { IProduct } from './constants';
import { getProducts } from './thunk';

const initialState: State<IProduct> = {
  essence: null,
  loading: STATUS.IDLE,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.essence = action.payload.slice(1, 9);
      })
      .addMatcher(
        (action) => action.type.endsWith(`/pending`),
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
