import React, { useState, createContext, FC, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContextValues, AuthType } from '../../types'

const AuthContext = createContext<AuthContextValues>({
  auth: {
    username: '',
    password: '',
    isSignedIn: false,
  },
})

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthType>({
    username: 'pulsemonitoring',
    password: 'password',
    isSignedIn: false,
  })
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

AuthProvider.defaultProps = {
  children: null,
}

export const useAuthState = (): AuthContextValues => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('Context hooks must be used within a provider')
  }
  return context
}
