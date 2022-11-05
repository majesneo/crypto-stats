import React, { FC, forwardRef, ReactNode, useContext } from 'react';
import { FieldContext } from '../FieldGroup';

type LabelProps = React.HTMLProps<HTMLLabelElement>;

export const Label: FC<{ children: ReactNode }> = forwardRef<
  LabelProps,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <label id={id} ref={ref} {...props}>
      {props.children}
    </label>
  );
});
