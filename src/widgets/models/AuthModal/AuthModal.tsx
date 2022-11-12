import React, { FC, ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/lib/store/store';
import { Modal, ModalContents, ModalOpenButton } from '../Modal/ModalContext';

interface IAuthModal {
  openButton: ReactElement;
  modalContent?: ReactNode;
}

export const AuthModal: FC<IAuthModal> = ({ modalContent, openButton }) => {
  const { essence: user } = useSelector((state: RootState) => state.user);

  if (user) {
    return openButton;
  }

  return (
    <Modal>
      <ModalContents>{modalContent}</ModalContents>
      <ModalOpenButton>{openButton}</ModalOpenButton>
    </Modal>
  );
};
