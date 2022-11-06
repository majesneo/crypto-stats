import React, { FC, ReactNode, useEffect } from 'react';
import { useDisableScroll } from '../../../shared/hooks/useDisableScroll';
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

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    console.log('hidden');

    document.body.style.overflowY = 'hidden'

    return () => {
      console.log('unmounte');

      document.body.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  return (
    <StyledModalContent isOpen={isOpen}>
      <StyledModalWrapper>
        <CloseModal onClick={useClose} />
        {children}
      </StyledModalWrapper>
    </StyledModalContent>
  );
};
