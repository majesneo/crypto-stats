import React, { cloneElement, ReactNode, useContext, useEffect } from 'react';
import { createContext, FC, useState } from 'react';
import { ModalContent } from './ModalContent';

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen (isOpen: boolean) { return },
  useDisableScroll: ({ element, disabled }: { element: HTMLElement, disabled: boolean }) => {
    useEffect(() => {
      if (!element) {
        return
      }

      element.style.overflowY = disabled ? 'hidden' : 'scroll'

      return () => {
        element.style.overflowY = 'scroll'
      }
    }, [element, disabled])
  }
});

export const Modal: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { useDisableScroll } = useContext(ModalContext);


  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, useDisableScroll }} {...props}>
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
  const { useDisableScroll } = useContext(ModalContext);
  return (
    <ModalContent
      isOpen={isOpen}
      useDisableScroll={useDisableScroll}
      closeModal={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </ModalContent>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('This component must be used Modal component.');
  }

  return context;
};
