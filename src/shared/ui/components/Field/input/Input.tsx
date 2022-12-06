import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  useContext,
} from 'react';
import { FieldContext } from '../FieldGroup';
import { StyledInput } from './style';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: ForwardRefExoticComponent<InputProps> = forwardRef(
  (props, ref) => {
    const id = useContext(FieldContext);
    return (
      <>
        <StyledInput {...ref} id={id} {...props} />
      </>
    );
  }
);
