import React, { FC, forwardRef, useContext } from 'react';
import { FieldContext } from '../FieldGroup';
import { StyledInput } from './style';



export const Input: FC<React.ComponentPropsWithoutRef<'input'>> = forwardRef<
  HTMLInputElement & React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <StyledInput type="text" ref={ref} id={id} {...props} />;
});
