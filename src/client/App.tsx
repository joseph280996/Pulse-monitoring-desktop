import React, { ReactElement } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Routes from './routes/routes'
import routesConfig from './routes/routesConfig'

export default function App(): ReactElement {
  return (
    <AuthProvider>
      <Router>
        <Routes routes={routesConfig} />
      </Router>
    </AuthProvider>
  )
}
