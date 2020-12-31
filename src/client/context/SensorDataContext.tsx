import React, { useState, createContext, FC, useContext } from 'react'
import PropTypes from 'prop-types'
import { SensorDataContextValues } from '../../types'

const SensorContext = createContext<SensorDataContextValues>({
  data: [],
})

export const SensorValueProvider: FC = ({ children }) => {
  const [data, setData] = useState<string[]>([])
  return (
    <SensorContext.Provider value={{ data, setData }}>
      {children}
    </SensorContext.Provider>
  )
}

SensorValueProvider.propTypes = {
  children: PropTypes.node,
}

SensorValueProvider.defaultProps = {
  children: null,
}

export const useDataState = (): SensorDataContextValues => {
  const context = useContext(SensorContext)

  if (context === undefined) {
    throw new Error('Context hooks must be used within a provider')
  }
  return context
}
