import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen(isOpen: boolean) {},
});

export const Modal: FC<IModal> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props}>
      {children}
    </ModalContext.Provider>
  );
};
interface IModal {
  children: ReactNode;
}

export const ModalContents: FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const rootElement = document.createElement('div');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rootModalElement = document.getElementById('rootModal')!;

  useEffect(() => {
    rootModalElement?.appendChild(rootElement);
    return () => {
      rootModalElement?.removeChild(rootElement);
    };
  }, [rootModalElement, rootElement]);

  return createPortal(
    <>
      <ModalContent isOpen={isOpen} {...props}>
        {children}
      </ModalContent>
    </>,
    rootElement
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('This component must be used Modal component.');
  }

  return context;
};
