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
	const { essence: products } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
	useEffect(() => {
		if (!products) {
			dispatch(getProducts());
		}
  });

	console.log(products, 'of leev');
  return (
		<StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
			{/* You need to utilise ts more */}
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </StyledGridContainer>
  );
};
