import * as React from 'react';
import SignIn from '../../../containers/form/SignInForm/SignInForm';
import styles from './SignInPage.scss';

const SignInPage = (): React.ReactElement => {
  return (
    <div className={styles.SignIn}>
      <div className={styles['SignIn-container']}>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
