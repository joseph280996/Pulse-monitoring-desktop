import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuthState from 'renderer/client/utils/hooks/useAuthState';
import SignInPage from './signin';
import ChangeUsername from './ChangeUsername';
import ForgotPass from './ForgotPass';

const AuthRoutes = () => {
  const {
    auth: { isSignedIn },
    setAuth,
  } = useAuthState();
  const isSignedInStored = localStorage.getItem('isSignedIn');

  useEffect(() => {
    if (!!isSignedInStored !== isSignedIn && setAuth) {
      setAuth((auth) => ({ ...auth, isSignedIn: !!isSignedInStored }));
    }
  }, [isSignedIn, isSignedInStored, setAuth]);

  if (isSignedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
      <Route path="forgotpass" element={<ForgotPass />} />
      <Route path="changeusername" element={<ChangeUsername />} />
    </Routes>
  );
};

export default AuthRoutes;
