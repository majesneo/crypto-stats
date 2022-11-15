import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '../../../shared/constants/constants';
import { IProduct } from './constants';

export interface StateCart<T> {
  essence: { [key: string]: T };
  loading: keyof typeof STATUS;
  error: string;
}

export interface ICartProduct extends IProduct {
  amount: number;
}

const initialState: StateCart<ICartProduct> = {
  essence: {},
  loading: STATUS.IDLE,
  error: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      { payload: { product } }: PayloadAction<{ product: IProduct }>
    ) => {
      state.essence[product.id] = { ...product, amount: 1 };
    },
    removeFromCart: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      delete state.essence[id];
    },
    setAmount: (
      state,
      { payload: { amount, id } }: PayloadAction<{ id: number; amount: number }>
    ) => {
      state.essence[id].amount = amount;
    },
  },
});
