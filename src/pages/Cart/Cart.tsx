import React, { FC, useMemo } from 'react';
import CartProduct from '../../entities/cart/ui/CartProduct/CartProduct';
import CartTotal from '../../entities/cart/ui/CartTotal/CartTotal';
import { useAppSelector } from '../../shared/lib/store/store';
import Container from '../../shared/ui/components/Container/Container';
import { CartProductTable, ColumnName } from './style';

export const Cart: FC = () => {
  const { essence } = useAppSelector((state) => state.cart);
  const cartProducts = Object.values(essence);

  const totalPrice = useMemo(() => {
    console.log('totalPrice');
    return cartProducts.reduce((prev, cur) => prev + cur.price * cur.amount, 0);
  }, [cartProducts]);

  if (!totalPrice) {
    return <div style={{ textAlign: 'center' }}>Empty cart</div>;
  }

  return (
    <Container>
      <CartProductTable>
        <ColumnName></ColumnName>
        <ColumnName></ColumnName>
        <ColumnName>Price</ColumnName>
        <ColumnName>Quantity</ColumnName>
        <ColumnName>Total</ColumnName>
        <ColumnName></ColumnName>
        {cartProducts.map((product) => (
          <CartProduct key={product.id} {...product} />
        ))}
      </CartProductTable>
      <CartTotal totalPrice={totalPrice} />
    </Container>
  );
};
