import React, { ReactElement, useState } from 'react'
import { object } from 'yup'
import { useFormik } from 'formik'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../../context/AuthContext'
import { AuthTypes } from '../../../../common/types'
import SignInComponent from '../../../components/pages/SignIn'
import fields from './signInFields'

function SignIn(): ReactElement {
  const { auth, setAuth } = useAuthState()
  const [submitting, setSubmitting] = useState(false)
  const { setStatus, ...restFormikProps } = useFormik<AuthTypes.BasicAuthType>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formValues: AuthTypes.BasicAuthType) => {
      setSubmitting(true)
      setTimeout(() => {
        if (
          setAuth &&
          auth.username === formValues.username &&
          auth.password === formValues.password
        ) {
          setSubmitting(false)
          setAuth({ ...auth, isSignedIn: true })
        } else {
          setSubmitting(false)
          setStatus('Wrong username or password. Please try again.')
        }
      }, 1000)
    },
    validationSchema: object().shape(
      fields.reduce((fieldsValidation, { name, validate }) => {
        return { ...fieldsValidation, [name]: validate }
      }, {}),
    ),
  })
  if (auth.isSignedIn) return <Redirect to="/" />
  return (
    <SignInComponent
      {...restFormikProps}
      setStatus={setStatus}
      submitting={submitting}
    />
  )
}

export default SignIn
