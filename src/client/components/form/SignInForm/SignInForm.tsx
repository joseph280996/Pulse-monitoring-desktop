import * as React from 'react'
import { Form } from 'react-bootstrap'
import Button from '../../Button'
import Message from '../../Message'
import { TextFieldWithKeyboard } from '../../TextField'
import styles from './SignInForm.scss'
import { ISignInFormProps } from './SignInFormTypes'

function SignInFormComponent({
  handleSubmit,
  handleBlur,
  isSubmitting,
  status,
  values,
  dirty,
  errors,
  isValid,
  fields,
  setFieldValue,
}: ISignInFormProps): React.ReactElement {
  return (
    <div className={styles['Form-container']}>
      <Form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles['Form-title']}>
          <h1 className={styles['SignInForm-welcome']}>
            Welcome to Pulse Monitoring
          </h1>
          <h3 className={styles['SignInForm-titleText']}>Sign In</h3>
        </div>
        {status && (
          <Message className={styles['SignInForm-error']} error={status} />
        )}
        <div className={styles['Form-fields']}>
          {fields.map(
            ({
              placeholder,
              name,
              FieldComponent = TextFieldWithKeyboard,
              ...passThroughProps
            }) => (
              <FieldComponent
                label={placeholder}
                error={errors[name]}
                key={name}
                value={values[name]}
                onChange={(input) => {
                  setFieldValue(name, input)
                }}
                onBlur={handleBlur}
                {...passThroughProps}
              />
            ),
          )}
        </div>
        <div className="Form-buttonWrapper">
          <Button
            type="submit"
            isSubmitting={isSubmitting}
            className={styles['SignInForm-signInButton']}
            text="Sign In"
            disabled={!dirty || isSubmitting || (!isValid && Boolean(errors))}
          />
        </div>
      </Form>
    </div>
  )
}

export default SignInFormComponent
