import React, { FC, ReactNode } from 'react';
import { StyledModalContent } from './style';

export interface StyledModalContentI {
  isOpen: boolean | undefined;
}

export interface IModalContent {
  isOpen?: boolean;
  children?: ReactNode;
  closeModal: () => void;
}

export const ModalContent: FC<IModalContent> = ({
  closeModal,
  children,
  isOpen,
}) => {
  return (
    <StyledModalContent isOpen={isOpen}>
      {children}
      <button onClick={() => closeModal()}>Close</button>
    </StyledModalContent>
  );
};
