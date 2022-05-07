import { useState, useEffect } from 'react';
import WebSocketController from '../controller/WebSocketController';
import WebSocketFactory from '../factory/WebSocketFactory';

type UseWebsocketReturnType = {
  error: ErrorEvent | null;
  readyState: number | undefined;
  controllerUUID: string | undefined;
};

/**
 * @param {import('react').Dispatch<any>} setDataFunc - function to define how data is being saved.
 * @returns {UseWebsocketReturnType}
 */
const useWebSocket = (): UseWebsocketReturnType => {
  const [controllerUUID, setControllerUUID] = useState<string | undefined>();
  const [error, setError] = useState<ErrorEvent | null>(null);
  const [readyState, setReadyState] = useState<number | undefined>(
    WebSocket.CLOSED
  );
  useEffect(() => {
    const connection =
      WebSocketController.GetWebSocketConnection(controllerUUID);
    if (connection?.ws().readyState === WebSocket.CLOSED) {
      const newControllerUUID = WebSocketController.CreateWebSocketConnection({
        getOnOpenFn: (wsClient: WebSocketFactory) => () => {
          wsClient?.ws().send('getSensorData');
          setReadyState(wsClient?.ws().readyState);
        },
        getOnErrorFn:
          (wsClient: WebSocketFactory) =>
          (err: Event): void => {
            setError(err as ErrorEvent);
            wsClient?.ws().close();
          },
      });
      setControllerUUID(newControllerUUID);
    }
    return () => {
      WebSocketController.Dispose();
    };
  }, [controllerUUID]);

  return { error, readyState, controllerUUID };
};

export default useWebSocket;
