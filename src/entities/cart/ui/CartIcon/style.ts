import styled, { css, keyframes } from 'styled-components';
import { CartIconProps } from './CartIcon';

export const StyledCartIcon = styled.div<CartIconProps>`
  position: relative;
  > svg {
    width: ${({ widthIcon }) => (widthIcon ? widthIcon : '100%')};
    height: ${({ heightIcon }) => (heightIcon ? heightIcon : '100%')};
  }
`;

const Circle = keyframes({
  '0%': { transform: 'scale3d(1, 1, 1)' },
  '50%': { transform: 'scale3d(1.5, 1.5, 1.5)' },
  '100%': { transform: 'scale3d(1, 1, 1)' },
});

export const setAnimationCircle = () => {
  return css`
    animation: ${Circle};
    animation-duration: 0.5s;
    animation-fill-mode: both;
  `;
};

export const CartIconCircle = styled.div<CartIconProps>`
  font-size: 14px;
  color: white;
  background-color: red;
  border-radius: 20px;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: -5px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ activatedAnimation }) =>
    activatedAnimation ? setAnimationCircle() : ''}
`;
