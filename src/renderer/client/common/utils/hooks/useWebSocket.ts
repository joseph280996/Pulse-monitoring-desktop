import { useState, useEffect } from 'react';
import WebSocketFactory from '../factory/WebSocketControllerFactory';
import WebSocketController from '../controller/WebSocketController';
import { OnRecordedDataWSMessageConfigType } from '../onRecordedDataWSMessage';
import { OnRecordIDWsMessageConfigType } from '../onRecordIDWsMessage';

type UseWebsocketReturnType = {
  error?: ErrorEvent;
  readyState?: number;
  controllerUUID?: string;
};

type UseWebSocketType = (
  messageHandlerFactoryProps: OnRecordedDataWSMessageConfigType &
    OnRecordIDWsMessageConfigType
) => UseWebsocketReturnType;

/**
 * @param {import('react').Dispatch<any>} setDataFunc - function to define how data is being saved.
 * @returns {UseWebsocketReturnType}
 */
const useWebSocket: UseWebSocketType = (messageHandlerFactoryProps) => {
  const [controllerUUID, setControllerUUID] = useState<string | undefined>();
  const [error, setError] = useState<ErrorEvent | undefined>();
  const [readyState, setReadyState] = useState<number | undefined>(
    WebSocket.CLOSED
  );

  useEffect(() => {
    const connection = WebSocketFactory.getWebSocketConnection(controllerUUID);
    if (connection?.status === WebSocket.CLOSED) {
      const newControllerUUID = WebSocketFactory.createWebSocketConnection({
        getOnOpenFn: (wsClient: WebSocketController) => () => {
          wsClient?.sendMessage('getSensorData');
          setReadyState(wsClient?.status);
        },
        getOnErrorFn:
          (wsClient: WebSocketController) =>
          (err: Event): void => {
            setError(err as ErrorEvent);
            wsClient?.closeConnection();
          },
        onMessageHandlerFactoryProps: messageHandlerFactoryProps,
      });
      setControllerUUID(newControllerUUID);
    }
    return () => {
      WebSocketFactory.dispose();
    };
  }, [controllerUUID, messageHandlerFactoryProps]);

  return { error, readyState, controllerUUID };
};

export default useWebSocket;
