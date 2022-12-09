import React, { CSSProperties, FC } from 'react';
import { ContainerSpinner, StyledSpinner } from './style';

export interface ISpinner {
  isFullWidth?: boolean;
  isFullContent?: boolean;
  style?: CSSProperties;
}

export const Spinner: FC<ISpinner> = ({ ...props }) => {
  return (
    <ContainerSpinner {...props}>
      <StyledSpinner />
    </ContainerSpinner>
  );
};
