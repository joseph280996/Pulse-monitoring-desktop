import { useFormik } from 'formik'
import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { object } from 'yup'
import { IBasicAuthType } from '../../../common/utils/context/AuthContext'
import useAuthState from '../../../common/utils/hooks/useAuthState'
import SignInFormComponent from '../../../components/form/SignInForm/SignInForm'
import fields from './signInFields'
import { FakeAuthResolveType } from './SignInTypes'

function SignInFormContainer(): React.ReactElement {
  const { auth, setAuth } = useAuthState()
  const { setStatus, ...restFormikProps } = useFormik<IBasicAuthType>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formValues: IBasicAuthType) => {
      return new Promise<FakeAuthResolveType>((resolve, reject) => {
        setTimeout(() => {
          if (
            auth.username === formValues.username &&
            auth.password === formValues.password
          ) {
            resolve({ isSignedIn: true })
          } else {
            reject(new Error('Wrong username or password.'))
          }
        }, 100)
      })
        .then((value: FakeAuthResolveType) => {
          if (setAuth) {
            setAuth((prevAuth) => ({
              ...prevAuth,
              isSignedIn: value.isSignedIn,
            }))
          }
        })
        .catch((error) => {
          setStatus(error.message)
        })
    },
    validationSchema: object().shape(
      fields.reduce((fieldsValidation, { name, validate }) => {
        return { ...fieldsValidation, [name]: validate }
      }, {}),
    ),
  })
  if (auth.isSignedIn) return <Redirect to="/export" />
  return (
    <SignInFormComponent
      {...restFormikProps}
      fields={fields}
      setStatus={setStatus}
    />
  )
}

export default SignInFormContainer
