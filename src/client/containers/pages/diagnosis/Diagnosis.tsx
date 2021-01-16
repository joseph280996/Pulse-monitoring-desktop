import React, { ReactElement, useState } from 'react'
import { ipcRenderer } from 'electron'
import Component from '../../../components/pages/diagnosis/Diagnostic'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { DIAGNOSTIC_MODE } from '../../../../variables'
import useIPCListener from '../../../hooks/useIPCListener'

function Diagnosis(): ReactElement {
  const [shouldStartRecord, setStartRecord] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const { height, width } = useWindowDimensions(20)
  const [displayData, recordedData] = useIPCListener(
    'sensorValues-reply',
    shouldStartRecord,
  )

  const onReset = () => {
    ipcRenderer.send('sensorValues', DIAGNOSTIC_MODE.START)
    setIsFinished(false)
  }

  const onRecordHandler = () => {
    setStartRecord(true)
  }
  const onStopHandler = () => {
    ipcRenderer.send('sensorValues', DIAGNOSTIC_MODE.STOP)
    setIsFinished(true)
  }

  return (
    <Component
      height={height}
      width={width}
      isFinished={isFinished}
      data={displayData}
      onRecord={onRecordHandler}
      recordStarted={shouldStartRecord}
      onStop={onStopHandler}
      onReset={onReset}
      recordedData={recordedData}
    />
  )
}

export default Diagnosis
