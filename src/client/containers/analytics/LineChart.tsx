import React, { useEffect } from 'react'
import { ipcRenderer } from 'electron'
import { DIAGNOSTIC_MODE } from '../../../variables'
import Component from '../../components/analytics/LineChart'

const LineChart = (props: any) => {
  useEffect(() => {
    ipcRenderer.send('sensorValues', DIAGNOSTIC_MODE.START)
  }, [])
  return <Component {...props} />
}

export default LineChart
