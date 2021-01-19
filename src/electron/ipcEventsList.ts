import { IpcMainEvent } from 'electron'
import { IpcChannelsInterface } from '../common/types'
import { DIAGNOSTIC_MODE } from '../common/variables'
import i2cEventHandler from './i2cEventHandler'
import IntervalHandler from './intevalHanlders'
import Record from './models/Record'

const intervalHandler = new IntervalHandler()

const intervalName = 'sendSensorValueInterval'

const channelsHandler: IpcChannelsInterface[] = [
  {
    channel: 'getSensorValue',
    handler: (event: IpcMainEvent, arg: any) => {
      switch (arg) {
        case DIAGNOSTIC_MODE.START:
          intervalHandler.registerInterval(
            intervalName,
            setInterval(async () => {
              try {
                const sensorValue = await i2cEventHandler
                event.sender.send('sensorValues', sensorValue?.measure('0+GND'))
              } catch (err) {
                console.error(err)
              }
            }, 500),
          )
          break
        case DIAGNOSTIC_MODE.STOP:
          try {
            intervalHandler.unregisterInterval(intervalName)
          } catch (err) {
            console.error('Unregister Interval Error: ', err)
          }
          break
        default:
          break
      }
    },
  },
  {
    channel: 'saveSensorValue',
    handler: (event: IpcMainEvent, { pulseTypeID, data }: any) => {
      const pulse = JSON.stringify(data)
      const newRecord = new Record({ pulse, pulseTypeID })
      newRecord.save()
      event.reply('saveSensorValue', newRecord)
    },
  },
]

export default channelsHandler
