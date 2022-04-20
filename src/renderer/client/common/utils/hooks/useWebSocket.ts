import * as React from 'react';
import WebSocketController from '../WebSocketController';

let wsClient: WebSocketController | null = null;

type UseWebsocketReturnType = {
  data: ReceivedDatum[];
  error: ErrorEvent | null;
  readyState: number | undefined;
  wsClient: WebSocketController | null;
};

export type ReceivedDatum = {
  timeStamp: number;
  data: number;
};

type UseWebsocketParamsType = (
  newData: ReceivedDatum[]
) => React.SetStateAction<ReceivedDatum[]>;

type UseWebSocketType = (
  param: UseWebsocketParamsType
) => UseWebsocketReturnType;

/**
 * @param {React.Dispatch<any>} setDataFunc - function to define how data is being saved.
 * @returns {UseWebsocketReturnType}
 */
const useWebSocket: UseWebSocketType = (
  setDataFunc
): UseWebsocketReturnType => {
  const [data, setData] = React.useState<ReceivedDatum[]>([]);
  const [error, setError] = React.useState<ErrorEvent | null>(null);
  const [readyState, setReadyState] = React.useState<number | undefined>(
    WebSocket.CLOSED
  );
  React.useEffect(() => {
    if (!wsClient || wsClient.ws().readyState === WebSocket.CLOSED) {
      wsClient = new WebSocketController({
        onOpen: () => {
          wsClient?.ws().send('getSensorData');
          setReadyState(wsClient?.ws().readyState);
          console.log('WebSocket connection established');
        },
        onError: (err: Event): void => {
          setError(err as ErrorEvent);
          wsClient?.ws().close();
        },
      });
    }
    return () => {
      wsClient?.ws().close();
    };
  }, []);
  React.useEffect(() => {
    if (wsClient) {
      wsClient.ws().onmessage = (message: MessageEvent) => {
        console.log(message);
        setData(setDataFunc(JSON.parse(message.data).recordedData));
      };
    }
  }, [setDataFunc]);
  return { data, error, readyState, wsClient };
};

export default useWebSocket;
