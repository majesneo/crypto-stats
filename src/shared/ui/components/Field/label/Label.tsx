import {
  DetailedHTMLProps,
  forwardRef,
  LabelHTMLAttributes,
  useContext,
} from 'react';
import React from 'react';
import { FieldContext } from '../FieldGroup';

export const Label = forwardRef<
  HTMLLabelElement,
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <label htmlFor={id} {...ref} {...props}>
      {props.children}
    </label>
  );
});
