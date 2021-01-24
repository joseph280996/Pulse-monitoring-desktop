import React, { useEffect } from 'react'
import { ipcRenderer } from 'electron'
import DIAGNOSIS_MODE from '../../../common/variables'
import Component from '../../components/analytics/LineChart'

const LineChart = (props: any) => {
  useEffect(() => {
    ipcRenderer.send('getSensorValues', DIAGNOSIS_MODE.START)
  }, [])
  return <Component {...props} />
}

export default LineChart
