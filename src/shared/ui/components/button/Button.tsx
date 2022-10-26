import React, { FC } from 'react';
import { StyledButton } from './styles';
import {COLORS, SIZE} from "../../../constants/style";

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: COLORS.PRIMARY | COLORS.SECONDARY;
  size?: SIZE.SMALL | SIZE.LARGE;
  isFullWidth?:boolean
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
