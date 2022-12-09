import {
  FastField,
  FieldProps,
  Formik,
  FormikHelpers,
  FormikProps,
} from 'formik';
import { FC } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../../../../shared/ui/components/button/Button';
import Error from '../../../../shared/ui/components/Error/Error';
import { Field } from '../../../../shared/ui/components/Field/FieldGroup';
import { COLORS } from '../../../../shared/ui/constants/style';
import { StyledForm } from './style';
export interface AuthFormI {
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  error?: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

interface Values {
  email: string;
  password: string;
}

export const AuthForm: FC<AuthFormI> = ({ ...props }) => {
  function onSubmitForm(values: Values, submitProps: FormikHelpers<Values>) {
    submitProps.setSubmitting(false);
    props.onSubmit(values);
    submitProps.resetForm();
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {(formik: FormikProps<Values>) => {
        return (
          <>
            <Error error={props.error} value={Boolean(props.error)} />
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <FastField name='email' type='email'>
                {({ field, meta }: FieldProps) => {
                  return (
                    <Field>
                      <Field.Label>
                        {meta.error && meta.touched ? (
                          <Error
                            error={meta.error}
                            value={Boolean(meta.error && meta.touched)}
                          />
                        ) : (
                          'Email'
                        )}
                      </Field.Label>
                      <Field.Input
                        placeholder='Email'
                        {...field}
                        type='email'
                      />
                    </Field>
                  );
                }}
              </FastField>
              <FastField name='password' type='password'>
                {({ field, meta }: FieldProps) => {
                  return (
                    <Field>
                      <Field.Label>
                        {meta.error && meta.touched ? (
                          <Error
                            error={meta.error}
                            value={Boolean(meta.error && meta.touched)}
                          />
                        ) : (
                          'Password'
                        )}
                      </Field.Label>
                      <Field.Input
                        placeholder='Password'
                        {...field}
                        type='password'
                      />
                    </Field>
                  );
                }}
              </FastField>
              <Button
                type='submit'
                onClick={() => formik.submitForm()}
                disabled={formik.isSubmitting || !formik.isValid}
                variant={COLORS.PRIMARY}
              >
                Login
              </Button>
            </StyledForm>
          </>
        );
      }}
    </Formik>
  );
};
