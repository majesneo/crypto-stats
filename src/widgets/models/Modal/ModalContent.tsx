import React, { FC, ReactNode } from 'react';
import { CloseModal } from './CloseModal';
import { StyledModalContent, StyledModalWrapper } from './style';

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
  const useClose = () => {
    closeModal();
  };
  return (
    <StyledModalContent isOpen={isOpen}>
      <StyledModalWrapper>
        <CloseModal onClick={useClose} />
        {children}
      </StyledModalWrapper>
    </StyledModalContent>
  );
};
