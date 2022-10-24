import React, { FC } from 'react';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
}

export const Input: FC<InputProps> = ({ children, id, ...props }) => {
  return <input type="text" id={id} {...props} />;
};
