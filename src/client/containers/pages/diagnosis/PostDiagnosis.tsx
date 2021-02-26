import React, { useEffect } from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { ipcRenderer } from 'electron'
import { DiagnosisTypes } from '../../../../common/types'
import Component from '../../../components/pages/diagnosis/PostDiagnosis'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

function PostDiagnosis() {
  const history = useHistory()
  const location = useLocation<DiagnosisTypes.PostDiagnosisLocationState>()
  const { width, height } = useWindowDimensions(20)
  useEffect(() => {
    ipcRenderer.send('getPulseTypes')
  }, [])
  if (!location.state || !location.state.recordedData)
    return <Redirect to="/" />
  return (
    <Component
      width={width}
      height={height - 100}
      data={location.state.recordedData}
      initialValues={{
        pulse: JSON.stringify(location.state.recordedData),
        pulseTypeID: 1,
      }}
      onSubmit={() => {
        ipcRenderer.send('saveSensorValues', {
          pulse: location.state.recordedData,
          pulseType: 1,
        })
        history.push('/finish')
      }}
    />
  )
}

export default PostDiagnosis
