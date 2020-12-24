import React, { ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import ForgotPass from './ForgotPass'
import ChangeUsername from './ChangeUsername'

const authRoutes = [
  {
    route: '/auth/signin',
    Component: SignIn,
  },
  {
    route: '/auth/forgotpass',
    Component: ForgotPass,
  },
  {
    route: '/auth/changeusername',
    Component: ChangeUsername,
  },
]

function AuthPage(): ReactElement {
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
