import * as React from 'react'
import WebSocketController from '../WebSocketController'

let wsClient: WebSocketController | null = null

type UseWebsocketReturnType = {
  error: ErrorEvent | null
  readyState: number | undefined
  wsClient: WebSocketController | null
}

export type ReceivedDatum = {
  timeStamp: number
  data: number
}

type UseWebSocketSetDataFunctionType = (
  newData: ReceivedDatum[],
) => React.SetStateAction<ReceivedDatum[]>

type UseWebSocketParamType = {
  setDataFunc: UseWebSocketSetDataFunctionType
  setData: React.Dispatch<React.SetStateAction<ReceivedDatum[]>>
}

type UseWebSocketType = (param: UseWebSocketParamType) => UseWebsocketReturnType

/**
 * @param {React.Dispatch<any>} setDataFunc - function to define how data is being saved.
 * @returns {UseWebsocketReturnType}
 */
const useWebSocket: UseWebSocketType = ({
  setData,
  setDataFunc,
}): UseWebsocketReturnType => {
  const [error, setError] = React.useState<ErrorEvent | null>(null)
  const [readyState, setReadyState] = React.useState<number | undefined>(
    WebSocket.CLOSED,
  )
  React.useEffect(() => {
    if (!wsClient || wsClient.ws().readyState === WebSocket.CLOSED) {
      wsClient = new WebSocketController({
        onOpen: () => {
          wsClient?.ws().send('getSensorData')
          setReadyState(wsClient?.ws().readyState)
          console.log('WebSocket connection established')
        },
        onError: (err: Event): void => {
          setError(err as ErrorEvent)
          wsClient?.ws().close()
        },
      })
    }
    return () => {
      wsClient?.ws().close()
    }
  }, [])
  React.useEffect(() => {
    if (wsClient) {
      wsClient.ws().onmessage = (message: MessageEvent) => {
        setData(setDataFunc(JSON.parse(message.data).recordedData))
      }
    }
  }, [setData, setDataFunc])
  return { error, readyState, wsClient }
}

export default useWebSocket
