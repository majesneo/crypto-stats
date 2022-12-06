import React, { FC, ReactElement } from 'react';
import { ModalContext } from './ModalContext';

interface ModalCloseButtonI {
  setIsOpen: () => void;
}

export const ModalCloseButton: FC<{
  children: (props: ModalCloseButtonI) => ReactElement;
}> = ({ children }) => {
  const { setIsOpen } = React.useContext(ModalContext);

  return children({
    setIsOpen: () => setIsOpen(false),
  });
};
