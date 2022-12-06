import React, { FC, ReactNode } from 'react';
import { StyledModalContent, StyledModalWrapper } from './style';

export interface StyledModalContentI {
  isOpen: boolean | undefined;
}

export interface IModalContent {
  isOpen?: boolean;
  children?: ReactNode;
}

export const ModalContent: FC<IModalContent> = ({ children, isOpen }) => {
  return (
    <StyledModalContent isOpen={isOpen}>
      <StyledModalWrapper>{children}</StyledModalWrapper>
    </StyledModalContent>
  );
};
