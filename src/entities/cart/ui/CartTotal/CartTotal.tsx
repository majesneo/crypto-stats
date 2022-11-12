import React, { FC } from 'react';
import { Button } from '../../../../shared/ui/components/button/Button';
import { COLORS, SIZE } from '../../../../shared/ui/constants/style';
import {
  CartTotalContainer,
  CartTotalContent,
  CartTotalLabel,
  CartTotalPrice,
} from './style';

const CartTotal: FC<{ totalPrice: number }> = ({ totalPrice }) => {
  return (
    <>
      <CartTotalContainer>
        <CartTotalContent>
          <CartTotalLabel>Total</CartTotalLabel>
          <CartTotalPrice>{totalPrice}$</CartTotalPrice>
        </CartTotalContent>
        <Button variant={COLORS.THIRD} size={SIZE.LARGE}>
          Checkout
        </Button>
      </CartTotalContainer>
    </>
  );
};

export default CartTotal;
