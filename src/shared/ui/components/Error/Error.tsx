import React from 'react';
import { StyledError } from './style';

type Props = {
  value: boolean;
  error?: string;
};

export default function Error({ value, error }: Props) {
  return <>{value ? <StyledError>{error}</StyledError> : null}</>;
}
