import { ReactElement } from 'react';
import SignIn from '../../../containers/form/SignInForm/SignInForm';
import './SignInPage.scss';

const SignInPage = (): ReactElement => {
  return (
    <div className="SignIn">
      <div className="SignIn-container">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
