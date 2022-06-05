import classNames from 'classnames';
import { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'renderer/client/components/Button';
import Message from 'renderer/client/components/Message';
import { TextFieldWithKeyboard } from 'renderer/client/components/TextField';
import './SignInForm.scss';
import { ISignInFormProps } from './SignInTypes';

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
}: ISignInFormProps): ReactElement {
  return (
    <div className={classNames('Form-container', 'SignInForm')}>
      <Form className="Form" onSubmit={handleSubmit}>
        <div className="SignInForm-fieldsWrapper">
          <div className="Form-title">
            <h1 className="SignInForm-header">Welcome</h1>
            <h3 className="SignInForm-subtitle">Sign In To Get Started</h3>
          </div>
          {status && <Message className="SignInForm-error" error={status} />}
          <div className="Form-fields">
            {fields.map(
              ({
                name,
                FieldComponent = TextFieldWithKeyboard,
                ...passThroughProps
              }) => (
                <FieldComponent
                  error={errors[name]}
                  key={name}
                  name={name}
                  value={values[name]}
                  onChange={(input) => {
                    setFieldValue(name, input);
                  }}
                  className="SignInForm-field"
                  onBlur={handleBlur}
                  {...passThroughProps}
                />
              )
            )}
          </div>
        </div>
        <div className="Form-buttonWrapper">
          <Button
            type="submit"
            isSubmitting={isSubmitting}
            className="SignInForm-signInButton"
            text="Sign In"
            disabled={!dirty || isSubmitting || (!isValid && Boolean(errors))}
          />
        </div>
      </Form>
    </div>
  );
}

export default SignInFormComponent;
