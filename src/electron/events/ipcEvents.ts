import { ipcMain } from 'electron'
import { DIAGNOSTIC_MODE } from '../../variables'

let sendingSensorValuesInterval: NodeJS.Timeout

ipcMain.on('sensorValues', (event, arg) => {
  switch (arg) {
    case DIAGNOSTIC_MODE.START:
      sendingSensorValuesInterval = setInterval(() => {
        try {
          event.sender.send('sensorValues-reply', Math.random())
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
})
