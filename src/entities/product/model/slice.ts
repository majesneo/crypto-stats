import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "./constants";
import {State, STATUS} from "../../../shared/constants/constants";
import {getProducts} from "./thunk";



const initialState: State<IProduct> = {
  products: [],
  loading: STATUS.IDLE,
  error: ''
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) =>{
        state.products = action.payload.slice(1,9)
      })
      .addMatcher((action) => action.type.endsWith(`/loading`), state => {
        state.loading = STATUS.LOADING;
      })
      .addMatcher((action) => action.type.endsWith(`/fulfilled`), (state) => {
        state.loading = STATUS.IDLE;
      })
      .addMatcher((action) => action.type.endsWith(`/rejected`), (state, action) => {
        state.loading = STATUS.IDLE;
        state.error = action.payload || action.error.message
      })
  }
})
