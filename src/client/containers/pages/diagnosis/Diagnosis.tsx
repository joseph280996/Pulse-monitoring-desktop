import React, { ReactElement, useState } from 'react'
import { ipcRenderer } from 'electron'
import Component from '../../../components/pages/diagnosis/Diagnostic'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import DIAGNOSTIC_MODE from '../../../../common/variables'
import useIPCListener from '../../../hooks/useIPCListener'

function Diagnosis(): ReactElement {
  const [isFinished, setIsFinished] = useState<boolean>(false)

  const [recordedStartIndex, setRecordedIndex] = useState<number | null>(null)
  const [recordedEndIndex, setEndIndex] = useState<number | null>(null)
  const { height, width } = useWindowDimensions(20)

  const [displayData] = useIPCListener(
    'sensorValues',
    (arg: any, currentTime: any) => (prevData: any) => {
      return [...prevData, { x: currentTime.valueOf(), y: arg }]
    },
  )

  const onReset = () => {
    ipcRenderer.send('getSensorValues', DIAGNOSTIC_MODE.START)
    setIsFinished(false)
  }

  const onRecordHandler = () => {
    setRecordedIndex(displayData.length)
  }
  const onStopHandler = () => {
    setIsFinished(true)
    setEndIndex(displayData.length)
  }

  return (
    <Component
      height={height}
      width={width}
      isFinished={isFinished}
      data={displayData}
      onRecord={onRecordHandler}
      onStop={onStopHandler}
      onReset={onReset}
      recordedStartIndex={recordedStartIndex}
      recordedEndIndex={recordedEndIndex}
    />
  )
}

export default Diagnosis
