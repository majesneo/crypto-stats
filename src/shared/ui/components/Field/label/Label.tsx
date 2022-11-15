import React, { FC, forwardRef, useContext } from 'react';
import { FieldContext } from '../FieldGroup';

export const Label: FC<React.ComponentPropsWithoutRef<'label'>> = forwardRef<
  HTMLLabelElement & React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <label id={id} ref={ref} {...props}>
      {props.children}
    </label>
  );
});
