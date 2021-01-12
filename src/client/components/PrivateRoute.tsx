import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'

function PrivateRoute({
  path,
  component: Component,
  exact,
}: RouteProps): ReactElement {
  const { auth } = useAuthState()
  if (auth.isSignedIn)
    return <Route path={path} exact={exact} component={Component} />
  return <Redirect to="/auth" />
}

export default PrivateRoute
