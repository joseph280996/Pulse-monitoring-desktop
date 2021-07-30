/* eslint-disable no-await-in-loop */
import dotenv from 'dotenv'
import moment, { Moment } from 'moment'
import WebSocket from 'ws'
import IntervalController from './IntervalController'

export type WebsocketMessageTypeHandler = {
  regExp: RegExp
  handler: (message: string, ws: WebSocket) => void
}

type RecordedData = {
  timeStamp: Moment
  data: number
}

dotenv.config()

let isLoopStart = false
let store: RecordedData[] = []

export default [
  {
    regExp: /start/i,
    handler: (_: string, ws: WebSocket) => {
      isLoopStart = true
      if (process.env.NODE_ENV === 'production') {
        // eslint-disable-next-line @typescript-eslint/no-extra-semi
        ;(async () => {
          const i2c = await import('i2c-bus')
          const ADS1115 = await import('ads1115')
          const bus = i2c.openPromisified(1)
          const ads1115 = ADS1115(bus)
          while (isLoopStart) {
            store.push({
              timeStamp: moment.utc(),
              data: await ads1115.measure('0+GND'),
            })
          }
        })()
      }
      try {
        IntervalController.registerInterval(
          'sendingDataInterval',
          setInterval(() => {
            ws.send(
              JSON.stringify({
                recordedData:
                  process.env.NODE_ENV === 'development'
                    ? Array.from({ length: 20 }, () => ({
                        timeStamp: moment.utc(),
                        data: Math.random(),
                      }))
                    : store,
              }),
            )
            store = []
          }, 200),
        )
      } catch (error) {
        IntervalController.clear('sendingDataInterval')
        console.error(error)
      }
    },
  },
  {
    regExp: /stop/i,
    handler: () => {
      isLoopStart = false
      IntervalController.clear('sendingDataInterval')
    },
  },
] as WebsocketMessageTypeHandler[]
