import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productSlice } from '../../../entities/product/model/slice';
import { userSlice } from '../../../entities/user/model/slice';

// const rootReducer = combineReducers({

// });

// const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    user: userSlice.reducer,
  }
});

// export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
