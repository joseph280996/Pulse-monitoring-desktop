import React, { ReactElement } from 'react'
import { object } from 'yup'
import { useFormik } from 'formik'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../../context/AuthContext'
import { AuthTypes } from '../../../../common/types'
import SignInComponent from '../../../components/pages/SignIn'
import fields from './signInFields'

function SignIn(): ReactElement {
  const { auth, setAuth } = useAuthState()
  const { setStatus, ...restFormikProps } = useFormik<AuthTypes.BasicAuthType>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formValues: AuthTypes.BasicAuthType) => {
      return new Promise((resolve, reject) => {
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
        .then((value: any) => {
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
  if (auth.isSignedIn) return <Redirect to="/" />
  return <SignInComponent {...restFormikProps} setStatus={setStatus} />
}

export default SignIn
