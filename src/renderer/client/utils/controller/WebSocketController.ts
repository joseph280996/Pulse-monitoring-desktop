import { WSMessageType } from '../../types';
import WebSocketMessageHandlerFactory from '../factory/WebSocketMessageHandlerFactory';
import { OnRecordedDataWSMessageConfigType } from '../onRecordedDataWSMessage';

export type WebSocketControllerConstructorParamsType = {
  onOpen: () => void;
  onError: (error: Event) => void;
};

class WebSocketController {
  private wsClient: WebSocket;

  get status(): number {
    return this.wsClient.readyState;
  }

  constructor({ onOpen, onError }: WebSocketControllerConstructorParamsType) {
    this.wsClient = new WebSocket(
      process.env.NODE_ENV === 'development'
        ? 'ws://localhost:8000'
        : 'ws://192.168.50.185:8000'
    );
    this.wsClient.onopen = onOpen;
    this.wsClient.onerror = onError;
    this.wsClient.onclose = (event: CloseEvent) => {
      console.log('Websocket is closing!!!');
      console.table({ reason: event.reason, code: event.code });
    };
  }

  private static getOnMessageHandler(
    onMessageHandlerFactoryExtraProps: OnRecordedDataWSMessageConfigType
  ) {
    return (message: MessageEvent) => {
      const parsedMessage: WSMessageType = JSON.parse(message.data);
      const handler = WebSocketMessageHandlerFactory.getHandler(
        parsedMessage.type
      );
      handler(parsedMessage, onMessageHandlerFactoryExtraProps);
    };
  }

  setMessageHandler(
    onMessageHandlerFactoryProps: OnRecordedDataWSMessageConfigType
  ) {
    this.wsClient.onmessage = WebSocketController.getOnMessageHandler(
      onMessageHandlerFactoryProps
    );
  }

  sendMessage(message: string) {
    if (this.wsClient.readyState !== WebSocket.CLOSED) {
      this.wsClient.send(message);
    }
  }

  closeConnection() {
    this.wsClient.close();
  }
}

export default WebSocketController;
