import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { object } from 'yup';
import { IBasicAuthType } from '../../utils/context/AuthContext';
import useAuthState from '../../utils/hooks/useAuthState';
import fields from './signInFieldsValidation';
import SignInFormComponent from './SignInFormComponent';
import { FakeAuthResolveType } from './SignInTypes';

function SignInFormContainer(): ReactElement {
  const { auth, setAuth } = useAuthState();
  const { setStatus, ...restFormikProps } = useFormik<IBasicAuthType>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (formValues: IBasicAuthType) => {
      try {
        const fakeAuthPromise = () =>
          new Promise<FakeAuthResolveType>((resolve, reject) => {
            setTimeout(() => {
              if (
                auth.username === formValues.username &&
                auth.password === formValues.password
              ) {
                resolve({ isSignedIn: true });
              } else {
                reject(new Error('Wrong username or password.'));
              }
            }, 100);
          });
        const value = await fakeAuthPromise();

        if (setAuth) {
          setAuth((prevAuth) => ({
            ...prevAuth,
            isSignedIn: value.isSignedIn,
          }));
          localStorage.setItem('isSignedIn', `${1}`);
        }
      } catch (error: unknown) {
        setStatus((error as Error).message);
      }
    },
    validationSchema: object().shape(
      fields.reduce((fieldsValidation, { name, validate }) => {
        return { ...fieldsValidation, [name]: validate };
      }, {})
    ),
  });
  if (auth.isSignedIn) return <Navigate to="/" replace />;
  return (
    <SignInFormComponent
      {...restFormikProps}
      fields={fields}
      setStatus={setStatus}
    />
  );
}

export default SignInFormContainer;
