import { ipcMain } from 'electron'
import Timer from '../../utils/Timer'
import { DIAGNOSTIC_MODE } from '../../variables'

ipcMain.on('sensorValues', (event, arg) => {
  if (arg === DIAGNOSTIC_MODE.START) {
    try {
      Timer(0, 20, (err, value: number | string) => {
        if (err) {
          throw Error(err.message)
        }
        event.sender.send('sensorValues-reply', value)
      })
    } catch (err) {
      console.log(err)
    }
  }
})
