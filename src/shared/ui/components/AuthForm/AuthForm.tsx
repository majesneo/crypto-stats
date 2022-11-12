import React, { FC, FormEvent, useRef } from 'react';
import { STATUS } from '../../../constants/constants';
import { Field } from '../Field/FieldGroup';
import { Spinner } from '../Spinner/Spinner';
import { StyledForm } from './style';

export interface AuthFormI {
  onSubmit: ({
    name,
    password,
    email,
  }: {
    name?: string | undefined;
    password: string;
    email?: string | undefined;
  }) => void;
  submitButton: React.ReactElement;
  status: keyof typeof STATUS;
  isSinUpForm?: boolean;
}

export const AuthForm: FC<AuthFormI> = ({
  onSubmit,
  submitButton,
  status,
  isSinUpForm,
}) => {
  const inputName = useRef<HTMLInputElement | null>(null);
  const inputPassword = useRef<HTMLInputElement>();
  const inputEmail = useRef<HTMLInputElement | null>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      name: inputName?.current?.value,
      password: inputPassword.current ? inputPassword.current.value : '',
      email: inputEmail?.current?.value,
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {isSinUpForm && (
        <Field>
          <Field.Label>Name</Field.Label>
          <Field.Input ref={inputName} />
        </Field>
      )}
      <Field>
        <Field.Label>Email</Field.Label>
        <Field.Input ref={inputEmail} />
      </Field>
      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Input ref={inputPassword} type="password" />
      </Field>
      <div style={{ textAlign: 'center' }}>
        {React.cloneElement(
          submitButton,
          { type: 'submit' },
          submitButton.props.children,
          status === STATUS.LOADING ? <Spinner /> : null
        )}
      </div>
    </StyledForm>
  );
};
