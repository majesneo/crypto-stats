import React from 'react';
import { createContext, FC, ReactNode } from 'react';
import { useUniqueId } from '../../../lib/utils';
import { Input } from './input/Input';
import { Label } from './label/Label';

interface IFieldGroup {
  Label: typeof Label;
  Input: typeof Input;
}

interface IField {
  children: ReactNode;
}

export const FieldContext = createContext<string | undefined>(undefined);

export const Field: FC<IField> & IFieldGroup = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Input = Input;
Field.Label = Label;
