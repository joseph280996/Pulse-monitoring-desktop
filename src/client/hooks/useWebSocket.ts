import { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
import WebSocketController from '../utils/WebSocketController'

let wsClient: WebSocketController | null = null

export type SetDataFuncParam = {
  data: string
  timeStamp: Moment
}

export type UseWebSocketParam = (input: SetDataFuncParam) => React.Dispatch<any>

const useWebSocket = (setDataFunc: UseWebSocketParam) => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState<ErrorEvent | null>(null)
  const [readyState, setReadyState] = useState<number | undefined>(
    WebSocket.CLOSED,
  )
  useEffect(() => {
    if (!wsClient || wsClient.ws().readyState === WebSocket.CLOSED) {
      wsClient = new WebSocketController({
        onOpen: () => {
          wsClient?.ws().send('getSensorData')
          setReadyState(wsClient?.ws().readyState)
          console.log('WebSocket connection established')
        },
        onMessage: (message: MessageEvent) => {
          setData(
            setDataFunc({
              data: message.data,
              timeStamp: moment.utc(message.timeStamp),
            }),
          )
        },
        onError: (err: Event): void => {
          setError(err as ErrorEvent)
        },
      })
    }
  }, [setDataFunc])
  return { data, error, readyState }
}

export default useWebSocket
