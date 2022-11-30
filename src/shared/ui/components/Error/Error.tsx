import React, { ReactNode } from 'react';
import { StyledError } from './style';

type Props = {
  value: boolean;
  children?: ReactNode;
  label?: string;
};

export default function Error({ label, value, children }: Props) {
  return (
    <>{value ? <StyledError>{children}</StyledError> : label ? label : null}</>
  );
}
