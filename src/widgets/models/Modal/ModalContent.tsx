import React, { FC, ReactNode } from 'react';
import { CloseIcon } from '../../../shared/ui/components/Icons/CloseIcon/Index';
import { StyledModalContent, StyledModalWrapper } from './style';

export interface StyledModalContentI {
  isOpen: boolean | undefined;
}

export interface IModalContent {
  isOpen?: boolean;
  children?: ReactNode;
  closeModal: () => void;
  useDisableScroll: ({
    element,
    disabled,
  }: {
    element: HTMLElement;
    disabled: boolean;
  }) => void;
}

export const ModalContent: FC<IModalContent> = ({
  closeModal,
  children,
  isOpen,
  useDisableScroll,
}) => {
  const useClose = () => {
    closeModal();
    useDisableScroll({ element: document.body, disabled: false });
  };

  return (
    <StyledModalContent isOpen={isOpen}>
      <StyledModalWrapper>
        <CloseIcon onClick={() => useClose} />
        {children}
      </StyledModalWrapper>
    </StyledModalContent>
  );
};
