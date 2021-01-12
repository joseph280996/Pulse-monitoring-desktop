import { ipcRenderer } from 'electron'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { LineMarkSeriesPoint } from 'react-vis'
import { RecordedData } from '../../types'

/**
 * @param channel the IPC channel to listen to
 * @param shouldStartRecord  boolean to start recording data
 * @returns recorded data and display data
 */

const useIPCListener = (channel: string, shouldStartRecord: boolean) => {
  const [data, setData] = useState<LineMarkSeriesPoint[]>([])
  const [recordedData, setRecordedData] = useState<RecordedData[]>([])
  useEffect(() => {
    ipcRenderer.on('sensorValues-reply', (_event, arg) => {
      setData((prevData) => {
        if (prevData.length > 100)
          return [...prevData.slice(1), { x: moment().valueOf(), y: arg }]
        return [...prevData, { x: moment().valueOf(), y: arg }]
      })
      if (shouldStartRecord) {
        setRecordedData((prevRecorded) => {
          return [
            ...prevRecorded,
            { time: moment().format('YYYY-MM-DD HH:mm:ss'), value: arg },
          ]
        })
      }
    })
    return () => {
      ipcRenderer.removeAllListeners(channel)
    }
  }, [channel, shouldStartRecord])

  return [data, recordedData]
}

export default useIPCListener
