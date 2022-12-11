import React, { FC, ReactNode } from 'react';
import { CartIconSvg } from '../CartIconSVG/Index';
import { CartIconCircle, StyledCartIcon } from './style';

export type CartIconProps = {
  widthIcon?: string;
  heightIcon?: string;
  children: number | ReactNode;
};

const CartIcon: FC<CartIconProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledCartIcon {...props}>
        <CartIconSvg />
        <CartIconCircle>{children}</CartIconCircle>
      </StyledCartIcon>
    </>
  );
};

export default CartIcon;
