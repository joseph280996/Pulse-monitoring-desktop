import React, { ReactElement, useEffect, useState } from 'react'
import { ipcRenderer } from 'electron'
import moment from 'moment'
import Component from '../../components/pages/diagnosis/Diagnostic'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { DIAGNOSTIC_MODE } from '../../../variables'

const registerListener = (
  updateData: (param: string) => void,
  onFinished: (param: boolean) => void,
) => {
  ipcRenderer.on('sensorValues-reply', (_event, arg) => {
    if (arg === DIAGNOSTIC_MODE.STOP) {
      ipcRenderer.removeAllListeners('sensorValues-reply')
      onFinished(true)
    } else {
      updateData(arg)
    }
  })
}

function Diagnosis(): ReactElement {
  const [data, setData] = useState<any>([])
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const { height, width } = useWindowDimensions(20)
  if (!ipcRenderer.eventNames().includes('sensorValues-reply')) {
    registerListener(
      (arg) =>
        setData((prevData: any) => {
          return [...prevData, { x: moment.utc().unix(), y: arg }]
        }),
      setIsFinished,
    )
  }

  const onStartHandler = () => {
    ipcRenderer.send('sensorValues', DIAGNOSTIC_MODE.START)
  }
  const onStopHandler = () => {
    ipcRenderer.send('sensorValues', DIAGNOSTIC_MODE.STOP)
  }

  return (
    <Component
      height={height}
      width={width}
      isFinished={isFinished}
      data={data}
      onStart={onStartHandler}
      onStop={onStopHandler}
    />
  )
}

export default Diagnosis
