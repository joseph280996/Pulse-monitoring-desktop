import React, { FC } from 'react'
import { AuthProvider } from './AuthContext'
import { SensorValueProvider } from './SensorDataContext'

const Context = ({ children }) => {
  return [AuthProvider, SensorValueProvider].reduce(
    (component, Provider) => <Provider>{component}</Provider>,
    children,
  )
}
export default Context
