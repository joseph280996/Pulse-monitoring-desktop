import React from 'react'
import { Form } from 'react-bootstrap'
import SubmitButton from '../form/SubmitButton'
import TextField from '../form/TextField'
import fields from '../../containers/form/signInFields'
import { SignInComponentProps } from '../../../types'

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
      <Form className="Form" onSubmit={handleSubmit}>
        <div className="Form-title">
          <h2 className="SignIn-titleText">Sign In</h2>
        </div>
        <div className="Form-fields">
          {fields.map((field) => (
            <TextField
              key={field.name}
              {...field}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="Form-buttonWrapper">
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
