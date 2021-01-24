import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SubmitButton } from '../form/Button'
import TextField from '../form/TextField'
import fields from '../../containers/pages/auth/signInFields'
import { AuthTypes } from '../../../common/types'
import Message from '../form/Message'
import Img from '../Img'

function SignInComponent({
  handleSubmit,
  handleBlur,
  handleChange,
  submitting,
  status,
  values,
}: AuthTypes.SignInComponentProps) {
  return (
    <div className="SignIn">
      <div className="SignIn-container">
        <div className="Form-container">
          <Form className="Form" onSubmit={handleSubmit}>
            <div className="Form-title">
              <h1 className="SignIn-welcome">Welcome to Pulse Monitoring</h1>
              <h3 className="SignIn-titleText">Sign In</h3>
            </div>
            {status && <Message className="SignIn-error" error={status} />}
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
            <div className="SignIn-otherOption">
              <Link className="SignIn-link" to="/forgotpass">
                Forgot password
              </Link>
            </div>
            <div className="Form-buttonWrapper">
              <SubmitButton
                className="Button-primary"
                text="Sign In"
                disabled={submitting || Boolean(status)}
              />
            </div>
          </Form>
        </div>
      </div>
      <Img
        className="SignIn-backgroundImage"
        src="/auth/background.jpg"
        alt="authentication-background"
        useBasePath
      />
    </div>
  )
}

export default SignInComponent
