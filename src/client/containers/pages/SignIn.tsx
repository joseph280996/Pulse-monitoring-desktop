import React, { ReactElement, useState } from 'react'
import { useFormik } from 'formik'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../context/AuthContext'
import { BasicAuthType } from '../../../types'
import SignInComponent from '../../components/pages/SignIn'

function SignIn(): ReactElement {
  const { auth, setAuth } = useAuthState()
  const [submitting, setSubmitting] = useState(false)
  const { setStatus, ...restFormikProps } = useFormik<BasicAuthType>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formValues: BasicAuthType) => {
      setSubmitting(true)
      if (
        setAuth &&
        auth.username === formValues.username &&
        auth.password === formValues.password
      ) {
        setAuth({ ...auth, isSignedIn: true })
        setSubmitting(false)
      } else {
        setStatus('Wrong username or password. Please try again.')
        setSubmitting(false)
      }
    },
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
