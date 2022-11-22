import React, { FC, ReactElement, useRef, useState } from 'react';
import { STATUS } from '../../../../shared/constants/constants';
import { Field } from '../../../../shared/ui/components/Field/FieldGroup';
import { StyledForm } from './style';

interface AuthFormProps {
  login: () => {
    email: string;
    password: string;
  };
}

export interface AuthFormI {
  children: (props: AuthFormProps) => ReactElement;
}

export const AuthForm: FC<AuthFormI> = ({ children }) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  function onSubmit() {
    return {
      password,
      email
    };
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Field>
        <Field.Label>Email</Field.Label>
        <Field.Input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
      </Field>
      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Input value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        type="password" />
      </Field>
      {children({
        login: () => onSubmit(),
      })}
    </StyledForm>
  );
};
