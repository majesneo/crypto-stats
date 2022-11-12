import React, { cloneElement, ReactNode, useContext, useEffect } from 'react';
import { createContext, FC, useState } from 'react';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen(isOpen: boolean) {
    return;
  },
});

export const Modal: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalCloseButton: FC<{ children: ReactNode }> = ({
  children: child,
}) => {
  const { setIsOpen } = useContext(ModalContext);

  return cloneElement(child as React.ReactElement, {
    onClick: () => setIsOpen(false),
  });
};

export const ModalOpenButton: FC<{ children: ReactNode }> = ({
  children: child,
}) => {
  const { setIsOpen } = useContext(ModalContext);

  return cloneElement(child as React.ReactElement, {
    onClick: () => setIsOpen(true),
  });
};

export const ModalContents: FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <ModalContent
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        {...props}
      >
        {children}
      </ModalContent>
    </>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('This component must be used Modal component.');
  }

  return context;
};
