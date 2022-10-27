import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SPACING_MAP } from '../../../../shared/ui/constants/style';
import { RootState } from '../../../../shared/ui/lib/store/store';
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
  const { products } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products, 'products');

  return (
    <StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </StyledGridContainer>
  );
};
