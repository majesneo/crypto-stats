import React from 'react';
import { FC } from 'react';

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  htmlFor: string;
}

export const Label: FC<LabelProps> = ({ children, htmlFor, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};
