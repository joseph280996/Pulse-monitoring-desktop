import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from '../../../components/pages/signin';
import ChangeUsername from './ChangeUsername';
import ForgotPass from './ForgotPass';

function AuthPage(): React.ReactElement {
  return (
    <Routes>
      <Route path="/signin" element={SignInPage} />
      <Route path="/forgotpass" element={ForgotPass} />
      <Route path="?changeusername" element={ChangeUsername} />
      <Route path="/" element={() => <Navigate to="/signin" replace />} />
    </Routes>
  );
}

export default AuthPage;
