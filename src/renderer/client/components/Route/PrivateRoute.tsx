import * as React from 'react';
import { Navigate, Route, PathRouteProps } from 'react-router-dom';
import useAuthState from '../../common/utils/hooks/useAuthState';

function PrivateRoute({
  path,
  element: Component,
}: PathRouteProps): React.ReactElement {
  const { auth } = useAuthState();
  return (
    <Route
      path={path}
      element={() => (auth.isSignedIn ? <Navigate to="/auth" /> : Component)}
    />
  );
}

export default PrivateRoute;
