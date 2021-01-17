import { IpcMain, IpcMainEvent } from 'electron'
import { DIAGNOSTIC_MODE } from '../../common/variables'

let sendingSensorValuesInterval: NodeJS.Timeout
export default [
  {
    channel: 'getSensorValue',
    handler: (event: IpcMainEvent, arg: any) => {
      switch (arg) {
        case DIAGNOSTIC_MODE.START:
          sendingSensorValuesInterval = setInterval(() => {
            try {
              event.sender.send('sensorValues', Math.random())
            } catch (err) {
              console.log(err)
            }
          }, 500)
          break
        case DIAGNOSTIC_MODE.STOP:
          if (sendingSensorValuesInterval)
            clearInterval(sendingSensorValuesInterval)
          break
        default:
          break
      }
    },
  },
  {
    channel: 'saveSensorValue',
    handler: (event: IpcMainEvent, arg: any) => {},
  },
]
