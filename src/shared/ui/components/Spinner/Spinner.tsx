import React, { FC } from 'react';
import { FullPageSpinnerStyle, StyledSpinner } from './style';

export interface ISpinner {
  isFullWidth?: boolean;
}

export const Spinner: FC<ISpinner> = ({ isFullWidth }) => {
  return (
    <FullPageSpinnerStyle isFullWidth={isFullWidth}>
      <StyledSpinner />
    </FullPageSpinnerStyle>
  );
};
