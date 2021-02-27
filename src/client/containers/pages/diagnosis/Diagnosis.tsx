import React, { ReactElement, useState } from 'react'
import { ipcRenderer } from 'electron'
import { Spinner } from 'react-bootstrap'
import Component from '../../../components/pages/diagnosis/Diagnostic'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import DIAGNOSTIC_MODE from '../../../../common/variables'
import useWebSocket from '../../../hooks/useWebSocket'

function Diagnosis(): ReactElement {
  const [isFinished, setIsFinished] = useState<boolean>(false)

  const [recordedStartIndex, setRecordedIndex] = useState<number | null>(null)
  const [recordedEndIndex, setEndIndex] = useState<number | null>(null)
  const { height, width } = useWindowDimensions(20)

  const { error, data, readyState } = useWebSocket(
    ({ data: newData, timeStamp }) => (prevData: any) => {
      return [...prevData, { x: timeStamp.valueOf(), y: newData }]
    },
  )

  const onReset = () => {
    ipcRenderer.send('getSensorValues', DIAGNOSTIC_MODE.START)
    setIsFinished(false)
  }

  const onRecordHandler = () => {
    setRecordedIndex(data.length)
  }
  const onStopHandler = () => {
    setIsFinished(true)
    setEndIndex(data.length)
  }

  if (!readyState || readyState === WebSocket.CONNECTING)
    return <Spinner animation="border" role="status" />

  if (error)
    return (
      <div>
        <Spinner animation="border" role="status" />
        <p>{error.message}</p>
      </div>
    )

  return (
    <Component
      height={height}
      width={width}
      isFinished={isFinished}
      data={data}
      onRecord={onRecordHandler}
      onStop={onStopHandler}
      onReset={onReset}
      recordedStartIndex={recordedStartIndex}
      recordedEndIndex={recordedEndIndex}
    />
  )
}

export default Diagnosis
