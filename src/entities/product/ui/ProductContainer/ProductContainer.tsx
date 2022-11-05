import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const { essence: products, loading } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);


  if (loading === STATUS.LOADING) {
    return <Spinner isFullWidth />
  }

  return (
		<StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
			{/* You need to utilise ts more */}
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </StyledGridContainer>
  );
};
