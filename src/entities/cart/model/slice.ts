import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../../shared/constants/constants';
import { IProduct } from './constants';

export interface StateCart<T> {
  essence: { [key: string]: T };
  totalPrice: 0;
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
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: StateCart<ICartProduct>, action: { payload: ICartProduct }) => {
      console.log('addToCart');
      console.log(state.totalPrice, 'state1');

      if (state.essence[action.payload.id]) {
        state.essence[action.payload.id] = { ...state.essence[action.payload.id], amount: 1 }
        state.totalPrice += state.essence[action.payload.id].price
      } else {
        state.essence[action.payload.id] = action.payload
        state.essence[action.payload.id] = { ...state.essence[action.payload.id], amount: 1 }
        state.totalPrice += state.essence[action.payload.id].price
      }
      console.log(state.totalPrice, 'state2');
    },
    removeFromCart: (state: StateCart<ICartProduct>, action: { payload: { id: number } }) => {
      state.totalPrice -= state.essence[action.payload.id].amount * state.essence[action.payload.id].price
      delete state.essence[action.payload.id]
    },
    setAmount: (state: StateCart<ICartProduct>, action: { payload: { id: number, amount: number } }) => {
      state.essence[action.payload.id].amount = action.payload.amount
      state.totalPrice += state.essence[action.payload.id].amount * state?.essence[action.payload.id]?.price
    }
  },
});
