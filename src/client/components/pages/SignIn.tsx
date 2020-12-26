import React from 'react'
import { Form } from 'react-bootstrap'
import { FormikConfig, FormikProps } from 'formik'
import SubmitButton from '../form/SubmitButton'
import TextField from '../form/TextField'
import fields from '../../containers/form/signInFields'
import { authTypes } from '../../types'

interface SignInComponentProps extends FormikProps<authTypes.BasicAuthType> {
  submitting: boolean
}

function SignInComponent({
  handleSubmit,
  handleBlur,
  handleChange,
  submitting,
  status,
  values,
}: SignInComponentProps) {
  return (
    <div className="SignIn-container Form-container">
      <Form onSubmit={handleSubmit}>
        <div>
          <h2>Sign In</h2>
        </div>
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
        <div>
          <SubmitButton
            text="Sign In"
            disabled={submitting || Boolean(status)}
          />
        </div>
      </Form>
    </div>
  )
}

export default SignInComponent
