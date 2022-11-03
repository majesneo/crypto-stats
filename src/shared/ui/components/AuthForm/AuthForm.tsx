import React, { FC, FormEvent } from 'react';
import { STATUS } from '../../../../shared/constants/constants';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
import { Spinner } from '../Spinner/Spinner';
import { FieldGroup, StyledForm } from './style';

export interface AuthFormI {
  onSubmit: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  submitButton: React.ReactElement;
  status: keyof typeof STATUS;
}

export const AuthForm: FC<AuthFormI> = ({ onSubmit, submitButton, status }) => {
  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FieldGroup>
        <Label htmlFor={'username'}>Username</Label>
        <Input id={'username'} />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor={'password'}>Password</Label>
        <Input id={'password'} />
      </FieldGroup>
      <div>
        {React.cloneElement(
          submitButton,
          { type: 'submit' },
          submitButton.props.children,
          status === STATUS.LOADING ? <Spinner /> : null,
        )}
      </div>
    </StyledForm>
  );
};
