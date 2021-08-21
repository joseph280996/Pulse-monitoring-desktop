import * as React from 'react'
import { Redirect } from 'react-router-dom'
import Routes from '../../../router/router'
import authRoutes from './routes'

function AuthPage(): React.ReactElement {
  return (
    <Routes routes={authRoutes}>
      <Redirect to="/auth/signin" />
    </Routes>
  )
}

export default AuthPage
