import React, { ReactElement } from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import SignIn from './SignIn'
import ForgotPass from './ForgotPass'
import ChangeUsername from './ChangeUsername'

const getAuthRoutes = (path: string) => [
  {
    route: `${path}/signin`,
    Component: SignIn,
  },
  {
    route: `${path}/forgotpass`,
    Component: ForgotPass,
  },
  {
    route: `${path}/changeusername`,
    Component: ChangeUsername,
  },
]

function AuthPage(): ReactElement {
  const { path } = useRouteMatch()
  const authRoutes = getAuthRoutes(path)
  return (
    <Switch>
      {authRoutes.map(({ route, Component }) => (
        <Route path={route} key={route} component={Component} />
      ))}
      <Redirect to="/auth/signin" />
    </Switch>
  )
}

export default AuthPage
