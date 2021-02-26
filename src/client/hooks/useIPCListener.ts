import { ipcRenderer } from 'electron'
import moment from 'moment'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

/**
 * @param channel the IPC channel to listen to
 * @param shouldStartRecord  boolean to start recording data
 * @returns recorded data and display data
 */

const useIPCListener = (
  channel: string,
  setDataFunc?: (arg: any, timeStamp: any) => Dispatch<SetStateAction<any>>,
) => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    ipcRenderer.on(channel, (_, arg) => {
      const currentTime = moment()
      if (setDataFunc) {
        setData(setDataFunc(arg, currentTime))
      } else setData(arg)
    })
    return () => {
      ipcRenderer.removeAllListeners(channel)
    }
  }, [channel, setDataFunc])

  return [data]
}

export default useIPCListener
