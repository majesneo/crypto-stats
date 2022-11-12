import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../../entities/cart/ui/CartProduct/CartProduct';
import CartTotal from '../../entities/cart/ui/CartTotal/CartTotal';
import { RootState } from '../../shared/lib/store/store';
import Container from '../../shared/ui/components/Container/Container';
import { CartProductTable, ColumnName } from './style';

export const Cart: FC = () => {
  const { essence, totalPrice } = useSelector((state: RootState) => state.cart);
  console.log(totalPrice, 'totalPrice CART');

  const cartProducts = Object.values(essence);

  console.log('test');

  const memoCartProducts = useMemo(() => cartProducts, [cartProducts]);
  return (
    <Container>
      <CartProductTable>
        <ColumnName></ColumnName>
        <ColumnName></ColumnName>
        <ColumnName>Price</ColumnName>
        <ColumnName>Quantity</ColumnName>
        <ColumnName>Total</ColumnName>
        <ColumnName></ColumnName>
        {memoCartProducts.map((product) => (
          <CartProduct key={product.id} {...product} />
        ))}
      </CartProductTable>
      <CartTotal totalPrice={totalPrice} />
    </Container>
  );
};
