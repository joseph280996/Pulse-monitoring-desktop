import { ReactElement } from 'react';
import SignInForm from '../../../forms/SignInForm/SignInForm';
import './SignInPage.scss';

const SignInPage = (): ReactElement => {
  return (
    <div className="SignIn">
      <div className="SignIn-container">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
