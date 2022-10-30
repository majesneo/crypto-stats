import React, { FC } from 'react';
import { StyledInput } from './style';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
}

export const Input: FC<InputProps> = ({ children, id, ...props }) => {
  return <StyledInput type="text" id={id} {...props} />;
};
