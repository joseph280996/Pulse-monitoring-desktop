import { IpcMainEvent, IpcRendererEvent } from 'electron'
import { I2CEventHandlerInterface, IpcChannelsInterface } from '../common/types'
import { DIAGNOSTIC_MODE } from '../common/variables'
import I2cEventHandler from './i2cEventHandler'
import IntervalHandler from './intevalHanlders'
import Record from './models/Record'

const intervalHandler = new IntervalHandler()

const intervalName = 'sendSensorValueInterval'

let i2cHandler: I2CEventHandlerInterface

const channelsHandler: IpcChannelsInterface[] = [
  {
    channel: 'getSensorValue',
    handler(event: IpcMainEvent | IpcRendererEvent, arg: any) {
      switch (arg) {
        case DIAGNOSTIC_MODE.START:
          if (!i2cHandler) i2cHandler = new I2cEventHandler()
          if (!i2cHandler.isInitialized()) i2cHandler.init()
          intervalHandler.registerInterval(
            intervalName,
            setInterval(async () => {
              try {
                const ADS1115Instance = i2cHandler.getADS1115Instance()
                if (ADS1115Instance) {
                  const sensorValue = ADS1115Instance.measure('0+GND')
                  event.sender.send('sensorValues', sensorValue)
                } else event.sender.send('sensorValue', null)
              } catch (err) {
                console.error(err)
              }
            }, 500),
          )
          break
        case DIAGNOSTIC_MODE.STOP:
          try {
            if (i2cHandler && i2cHandler.isInitialized) {
              i2cHandler.cleanup()
            }
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
    handler(
      event: IpcMainEvent | IpcRendererEvent,
      { pulseTypeID, data }: any,
    ) {
      const pulse = JSON.stringify(data)
      const newRecord = new Record({ pulse, pulseTypeID })
      newRecord.save()
      ;(event as IpcMainEvent).reply('saveSensorValue', newRecord)
    },
  },
]

export default channelsHandler
