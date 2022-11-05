import React, { CSSProperties, FC } from 'react';
import { FullPageSpinnerStyle, StyledSpinner } from './style';

export interface ISpinner {
  isFullWidth?: boolean;
  style?: CSSProperties;
}

export const Spinner: FC<ISpinner> = ({ isFullWidth }) => {
  return (
    <FullPageSpinnerStyle isFullWidth={isFullWidth}>
      <StyledSpinner />
    </FullPageSpinnerStyle>
  );
};
