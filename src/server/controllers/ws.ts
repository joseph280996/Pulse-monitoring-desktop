import WebSocket from 'ws'
import { ElectronTypes } from '../../common/types'
import IntervalsHandler from '../utils/intevalHanlders'
import I2cEventHandler from '../utils/i2cEventHandler'

type WSHandlerType = {
  regex: RegExp
  handler(client: WebSocket, params?: string): void
}

const intervalHandler = new IntervalsHandler()

let i2cHandler: ElectronTypes.I2CEventHandlerInterface

const getSensorValue = async () => {
  if (!i2cHandler) {
    i2cHandler = new I2cEventHandler()
  }
  if (!i2cHandler.isInitialized()) {
    i2cHandler.init()
  }
  const ADS1115Instance = i2cHandler.getADS1115Instance()
  if (ADS1115Instance) {
    return ADS1115Instance.measure('0+GND')
  }
  return 0
}

export default [
  {
    regex: /getSensorData/i,
    handler: (client) => {
      intervalHandler.registerInterval(
        'sendSensorValueInterval',
        setInterval(async () => {
          try {
            const sensorValue = await getSensorValue()
            client.send(sensorValue)
          } catch (err) {
            console.error(err)
          }
        }, 50),
      )
    },
  },
  {
    regex: /stopSensorData/i,
    handler: () => {
      try {
        if (i2cHandler && i2cHandler.isInitialized) {
          i2cHandler.cleanup()
        }
        intervalHandler.unregisterInterval('sendSensorValueInterval')
      } catch (err) {
        console.error('Unregister Interval Error: ', err)
      }
    },
  },
] as WSHandlerType[]
