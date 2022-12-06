import { FC, ReactElement, useContext } from 'react';
import { ModalContext } from './ModalContext';

export interface StyledModalBackgroundI {
  isOpen: boolean;
  setIsOpen?: () => void;
}

export const ModalBackground: FC<{
  children: (props: { isOpen: boolean; setIsOpen: () => void }) => ReactElement;
}> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return children({ isOpen, setIsOpen: () => setIsOpen(false) });
};
