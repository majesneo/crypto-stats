import React, { FC } from 'react';
import { ProductContainer } from '../../entities/product/ui/ProductContainer/ProductContainer';

export const Products: FC = () => {
  return (
    <>
      <ProductContainer spacing='XL' minItemWidth='24rem' />
    </>
  );
};
