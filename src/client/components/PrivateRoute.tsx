import React, { ReactElement } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteProps } from '../types'
import { useAuthState } from '../context/AuthContext'

function PrivateRoute({ route, Component }: RouteProps): ReactElement {
  const { auth } = useAuthState()
  console.log(auth)
  if (auth.isSignedIn)
    return <Route path={route} render={() => <Component />} />
  return <Redirect to="/auth" />
}

export default PrivateRoute
