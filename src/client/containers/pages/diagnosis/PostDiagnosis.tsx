import React from 'react'
import moment from 'moment'
import { Redirect, useLocation } from 'react-router-dom'
import { ipcRenderer } from 'electron'
import { PostDiagnosisLocationState } from '../../../../types'
import Component from '../../../components/pages/diagnosis/PostDiagnosis'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

function PostDiagnosis() {
  const location = useLocation<PostDiagnosisLocationState>()
  const { width, height } = useWindowDimensions(20)

  if (!location.state || !location.state.recordedData)
    return <Redirect to="/" />
  return (
    <Component
      width={width}
      height={height}
      data={location.state?.recordedData?.map((datum) => ({
        x: moment(datum.time).valueOf(),
        y: datum.value,
      }))}
      onClick={() =>
        ipcRenderer.send('saveSensorValues', location.state?.recordedData)
      }
    />
  )
}

export default PostDiagnosis
