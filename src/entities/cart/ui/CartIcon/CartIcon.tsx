import React, { FC, ReactNode } from 'react';
import { CartIconSvg } from '../CartIconSVG/Index';
import { CartIconCircle, StyledCartIcon } from './style';

export type CartIconProps = {
  widthIcon?: string;
  heightIcon?: string;
  activatedAnimation?: boolean;
  children: number | ReactNode;
};

const CartIcon: FC<CartIconProps> = ({
  widthIcon,
  heightIcon,
  activatedAnimation = false,
  children,
}) => {
  return (
    <>
      <StyledCartIcon widthIcon={widthIcon} heightIcon={heightIcon}>
        <CartIconSvg />
        <CartIconCircle activatedAnimation={activatedAnimation}>
          {children}
        </CartIconCircle>
      </StyledCartIcon>
    </>
  );
};

export default CartIcon;
