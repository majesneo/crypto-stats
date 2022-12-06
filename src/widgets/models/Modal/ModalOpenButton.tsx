import React, { FC, ReactElement } from 'react';
import { ModalContext } from './ModalContext';

interface ModalOpenButtonProps {
  setIsOpen: () => void;
}
export const ModalOpenButton: FC<{
  children: (props: ModalOpenButtonProps) => ReactElement;
}> = ({ children }) => {
  const { setIsOpen } = React.useContext(ModalContext);

  return children({
    setIsOpen: () => setIsOpen(true),
  });
};
