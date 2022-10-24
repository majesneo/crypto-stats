import React, { FC } from 'react';
import { COLORS, SIZE } from '@/shared/constants/style';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: COLORS.PRIMARY | COLORS.SECONDARY;
  size?: SIZE.SMALL | SIZE.LARGE;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
