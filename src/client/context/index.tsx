import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './AuthContext'

const contexts = [AuthProvider]

const Context = ({ children }: PropsWithChildren<void>) => {
  return contexts.reduce(
    (component, Provider) => <Provider>{component}</Provider>,
    children,
  )
}
export default Context
