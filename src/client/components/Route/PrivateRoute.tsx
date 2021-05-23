import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import useAuthState from '../../common/utils/hooks/useAuthState'

function PrivateRoute({
  path,
  component: Component,
  exact,
}: RouteProps): React.ReactElement {
  const { auth } = useAuthState()
  if (auth.isSignedIn)
    return <Route path={path} exact={exact} component={Component} />
  return <Redirect to="/auth" />
}

export default PrivateRoute
