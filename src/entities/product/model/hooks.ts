import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/store';
import { getProducts } from './thunk';

export const useGetProducts = () => {
  const { essence: products, loading } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);

  return { products, loading };
};
