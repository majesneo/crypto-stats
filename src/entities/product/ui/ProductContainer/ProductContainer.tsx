import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../entities/cart/model/actions';
import { IProduct } from '../../../../entities/cart/model/constants';
import { STATUS } from '../../../../shared/constants/constants';
import { RootState } from '../../../../shared/lib/store/store';
import { Spinner } from '../../../../shared/ui/components/Spinner/Spinner';
import { SPACING_MAP } from '../../../../shared/ui/constants/style';
import { getProducts } from '../../model/thunk';
import { ProductCard } from '../ProductCard/ProductCard';
import { StyledGridContainer } from './style';

export interface StyledGridContainerProps {
  spacing: keyof typeof SPACING_MAP;
  minItemWidth: string;
}

export const ProductContainer: FC<StyledGridContainerProps> = ({
  spacing,
  minItemWidth,
}) => {
  const { essence: products, loading } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);

  const handleToCart = (product: IProduct) => {
    dispatch(addToCart(product))
  }


  if (loading === STATUS.LOADING) {
    return <Spinner isFullWidth />;
  }

  return (
    <StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} handleToCart={() => handleToCart(product)} />
      ))}
    </StyledGridContainer>
  );
};
