import React, { FC } from 'react';
import { useModalContext } from './ModalContext';
import { StyledModalBackground } from './style';

export interface StyledModalBackgroundI {
  isOpen: boolean;
}

export const ModalBackground: FC = () => {
  const { isOpen } = useModalContext();

  return <StyledModalBackground isOpen={isOpen} />;
};
