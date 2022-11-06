import React, { FC } from 'react';
import { StyledModalBackground } from './style';

export interface StyledModalBackgroundI {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const ModalBackground: FC<StyledModalBackgroundI> = ({ ...props }) => {
  return <StyledModalBackground {...props} />;
};
