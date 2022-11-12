import React, { FC } from 'react';
import { CartIconSvg } from '../CartIconSVG/Index';
import { CartIconCircle, StyledCartIcon } from './style';

export type CartIconProps = {
  widthIcon?: string;
  heightIcon?: string;
  activatedAnimation?: boolean;
};

const CartIcon: FC<CartIconProps> = ({
  widthIcon,
  heightIcon,
  activatedAnimation = false,
}) => {
  return (
    <>
      <StyledCartIcon widthIcon={widthIcon} heightIcon={heightIcon}>
        <CartIconSvg />
        <CartIconCircle activatedAnimation={activatedAnimation}>
          4
        </CartIconCircle>
      </StyledCartIcon>
    </>
  );
};

export default CartIcon;
