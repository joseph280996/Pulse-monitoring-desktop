import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SubmitButton from '../form/SubmitButton'
import TextField from '../form/TextField'
import fields from '../../containers/pages/auth/signInFields'
import { SignInComponentProps } from '../../../common/types'
import backgroundImage from '../../public/assets/images/Chinese-Traditional-Medicine-Feature-image.jpg'

function SignInComponent({
  handleSubmit,
  handleBlur,
  handleChange,
  submitting,
  status,
  values,
}: SignInComponentProps) {
  return (
    <div
      className="SignIn"
      style={{
        background: `url(${backgroundImage}) 0 0 / cover no-repeat`,
      }}
    >
      <div className="SignIn-container">
        <div className="Form-container">
          <Form className="Form" onSubmit={handleSubmit}>
            <div className="Form-title">
              <h1 className="SignIn-welcome">Welcome to Pulse Monitoring</h1>
              <h3 className="SignIn-titleText">Sign In</h3>
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
    </div>
  )
}

export default SignInComponent
