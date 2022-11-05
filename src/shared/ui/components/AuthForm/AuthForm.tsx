import React, { FC, FormEvent } from 'react';
import { STATUS } from '../../../../shared/constants/constants';
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
  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, password, email } = event.target.elements;

    console.dir(event.target, 'event.target');
    console.dir(event.target.value, 'event.target.value');
    console.dir(event.target.elements, 'event.target.elements');

    onSubmit({
      name: name.value,
      password: password.value,
      email: email.value,
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {isSinUpForm && (
        <Field>
          <Field.Label >Name</Field.Label>
          <Field.Input nativeID={'name'} />
        </Field>
      )}
      <Field>
        <Field.Label>Email</Field.Label>
        <Field.Input nativeID={'email'} />
      </Field>
      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Input nativeID={'password'} type="password" />
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
