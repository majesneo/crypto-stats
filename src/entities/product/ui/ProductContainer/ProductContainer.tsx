import React, { FC } from 'react';
import { addToCart, setAmount } from '../../../../entities/cart/model/actions';
import { IProduct } from '../../../../entities/product/model/constants';
import { useGetProducts } from '../../../../entities/product/model/hooks';
import { STATUS } from '../../../../shared/constants/constants';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared/lib/store/store';
import { Spinner } from '../../../../shared/ui/components/Spinner/Spinner';
import { SPACING_MAP } from '../../../../shared/ui/constants/style';
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
  const dispatch = useAppDispatch();
  const { essence: cartProduct } = useAppSelector((state) => state.cart);
  const { loading, products } = useGetProducts();

  const handleAddToCart = (product: IProduct) => {
    if (!cartProduct[product.id]) {
      dispatch(addToCart({ product }));
    } else {
      dispatch(
        setAmount({
          id: product.id,
          amount: cartProduct[product.id].amount + 1,
        })
      );
    }
  };

  if (loading === STATUS.LOADING) {
    return <Spinner isFullWidth />;
  }

  return (
    <StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          addToCart={() => handleAddToCart(product)}
        />
      ))}
    </StyledGridContainer>
  );
};
