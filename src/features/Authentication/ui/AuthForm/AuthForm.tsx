import React, { FC, ReactElement, useRef } from 'react';
import { STATUS } from '../../../../shared/constants/constants';
import { Field } from '../../../../shared/ui/components/Field/FieldGroup';
import { StyledForm } from './style';

interface AuthFormProps {
  login: () => {
    email?: string;
    password?: string;
  };
}

export interface AuthFormI {
  children: (props: AuthFormProps) => ReactElement;
  status: keyof typeof STATUS;
}

export const AuthForm: FC<AuthFormI> = ({ children, status }) => {
  const inputPassword = useRef<HTMLInputElement>();
  const inputEmail = useRef<HTMLInputElement | null>(null);

  function onSubmit() {
    return {
      password: inputPassword?.current?.value,
      email: inputEmail?.current?.value,
    };
  }

  return (
    <StyledForm>
      <Field>
        <Field.Label>Email</Field.Label>
        <Field.Input ref={inputEmail} />
      </Field>
      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Input ref={inputPassword} type="password" />
      </Field>
      {children({
        login: () => onSubmit(),
      })}
    </StyledForm>
  );
};
