import { IpcMainEvent, IpcRendererEvent } from 'electron'
import { ElectronTypes } from '../common/types'
import DIAGNOSIS_MODE from '../common/variables'
import IntervalHandler from './intevalHanlders'
import Record from './models/Record'

const intervalHandler = new IntervalHandler()

const intervalName = 'sendSensorValueInterval'

let i2cHandler: ElectronTypes.I2CEventHandlerInterface

const getSensorValue = async () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const I2cEventHandler = require('./i2cEventHandler')
    if (!i2cHandler) i2cHandler = new I2cEventHandler()
    if (!i2cHandler.isInitialized()) i2cHandler.init()
    const ADS1115Instance = i2cHandler.getADS1115Instance()
    return ADS1115Instance?.measure('0+GND')
  }
  return new Promise((resolve) => resolve(Math.random()))
}

const channelsHandler: ElectronTypes.IpcChannelsInterface[] = [
  {
    channel: 'getSensorValue',
    handler(event: IpcMainEvent | IpcRendererEvent, arg: any) {
      switch (arg) {
        case DIAGNOSIS_MODE.START:
          intervalHandler.registerInterval(
            intervalName,
            setInterval(async () => {
              try {
                const sensorValue = await getSensorValue()
                console.log(sensorValue)
                event.sender.send('sensorValues', sensorValue)
              } catch (err) {
                console.error(err)
              }
            }, 500),
          )
          break
        case DIAGNOSIS_MODE.STOP:
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
