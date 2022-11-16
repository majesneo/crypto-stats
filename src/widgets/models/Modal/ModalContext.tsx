import React, {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

const rootModalElement = document.getElementById('rootModal') as Element;
export const ModalContext = createContext({
  isOpen: false,
  setIsOpen(isOpen: boolean) {
    return;
  },
});

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

  return createPortal(
    <>
      <ModalBackground isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <ModalContent
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        {...props}
      >
        {children}
      </ModalContent>
    </>,
    rootModalElement
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('This component must be used Modal component.');
  }

  return context;
};
