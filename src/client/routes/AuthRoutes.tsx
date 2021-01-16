import React, { ReactElement } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'
import SignIn from '../containers/pages/auth/SignIn'
import ForgotPass from '../containers/pages/auth/ForgotPass'
import ChangeUsername from '../containers/pages/auth/ChangeUsername'
import Routes from './routes'
import { Route } from '../../types'

const getAuthRoutes = (path: string): Route[] => [
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
    <Routes routes={authRoutes}>
      <Redirect to="/auth/signin" />
    </Routes>
  )
}

export default AuthPage
