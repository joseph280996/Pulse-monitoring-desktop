import React, { ReactElement, useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'
import Component from '../../components/pages/diagnosis/Diagnostic'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { DIAGNOSTIC_MODE } from '../../../variables'

function Diagnosis(): ReactElement {
  const [data, setData] = useState<any>([])
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const { height, width } = useWindowDimensions(20)
  ipcRenderer.on('sensorValues-reply', (_event, arg) => {
    if (arg === DIAGNOSTIC_MODE.STOP) setIsFinished(true)
    else setData([...data, arg])
  })
  useEffect(() => {
    ipcRenderer.send('sensorValues', 'start')
  }, [])
  console.log(data)
  return (
    <Component
      height={height}
      width={width}
      isFinished={isFinished}
      data={data}
    />
  )
}

export default Diagnosis
