import React, { FC, FormEvent } from 'react';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
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
}

export const AuthForm: FC<AuthFormI> = ({ onSubmit, submitButton }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      {
        React.cloneElement(
          submitButton,
          { type: 'submit' },
          submitButton.props.children
        )
        // isLoading ? <Spinner css={{ marginLeft: 5 }} /> : null
      }
      {/* {isError ? <ErrorMessage error={error} /> : null} */}
    </StyledForm>
  );
};
