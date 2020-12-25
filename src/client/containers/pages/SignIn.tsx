import { useFormik } from 'formik'
import React, { ReactElement } from 'react'
import TextField from '../../components/form/TextField'
import { useAuthState } from '../../context/AuthContext'
import { authTypes } from '../../types'
import fields from '../form/signInFields'

function SignIn(): ReactElement {
  const { auth, setAuth } = useAuthState()
  const { values, handleBlur, handleChange, handleSubmit } = useFormik<
    authTypes.BasicAuthType
  >({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formValues: authTypes.BasicAuthType) => {
      if (
        setAuth &&
        auth.username === formValues.username &&
        auth.password === formValues.password
      ) {
        setAuth({ ...auth, isSignedIn: true })
      }
    },
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>SignIn</div>
        <div>
          {fields.map((field) => (
            <div key={field.name}>
              <TextField
                {...field}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default SignIn
