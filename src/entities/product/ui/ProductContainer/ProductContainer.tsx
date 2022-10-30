import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../shared/lib/store/store';
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
  const { essence } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
      {essence.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </StyledGridContainer>
  );
};
