import { useState, useEffect } from 'react';
import WebSocketController from '../controller/WebSocketController';
import { OnRecordedDataWSMessageConfigType } from '../onRecordedDataWSMessage';
import { OnRecordIDWsMessageConfigType } from '../onRecordIDWsMessage';

let wsController: WebSocketController | null = null;

type UseWebsocketReturnType = {
  error?: ErrorEvent;
  readyState?: number;
  wsController: WebSocketController | null;
};

type UseWebSocketType = (
  messageHandlerFactoryProps: OnRecordedDataWSMessageConfigType &
    OnRecordIDWsMessageConfigType
) => UseWebsocketReturnType;

const useWebSocket: UseWebSocketType = (
  messageHandlerFactoryProps
): UseWebsocketReturnType => {
  const [error, setError] = useState<ErrorEvent | undefined>();
  const [readyState, setReadyState] = useState<number | undefined>(
    WebSocket.CLOSED
  );
  useEffect(() => {
    if (!wsController || wsController.status === WebSocket.CLOSED) {
      wsController = new WebSocketController({
        onOpen: () => {
          wsController?.sendMessage('getSensorData');
          setReadyState(wsController?.status);
          console.log('WebSocket connection established');
        },
        onError: (err: Event): void => {
          setError(err as ErrorEvent);
          wsController?.closeConnection();
        },
      });
    }
    return () => {
      wsController?.closeConnection();
    };
  }, []);

  useEffect(() => {
    if (wsController) {
      wsController.setMessageHandler(messageHandlerFactoryProps);
    }
  });

  return { error, readyState, wsController };
};

export default useWebSocket;
