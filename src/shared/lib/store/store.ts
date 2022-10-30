import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../../../entities/product/model/slice';

export const store = configureStore({
  reducer: productSlice.reducer,
});
export type RootState = ReturnType<typeof productSlice.reducer>;
