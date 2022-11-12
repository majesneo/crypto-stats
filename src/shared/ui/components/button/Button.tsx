import React, { FC } from 'react';
import { COLORS, SIZE } from '../../constants/style';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: keyof typeof COLORS;
  size?: SIZE.SMALL | SIZE.LARGE;
  isFullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
