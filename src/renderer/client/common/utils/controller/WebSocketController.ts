import WebSocketMessageHandlerFactory from '../factory/WebSocketMessageHandlerFactory';
import { OnRecordedDataWSMessageConfigType } from '../onRecordedDataWSMessage';

export type WebSocketControllerConstructorParamsType = {
  getOnOpenFn: (wsClient: WebSocketController) => null | (() => void);
  getOnErrorFn: (
    wsClient: WebSocketController
  ) => null | ((error: Event) => void);
  onMessageHandlerFactoryProps: OnRecordedDataWSMessageConfigType;
};

class WebSocketController {
  private wsClient: WebSocket;

  get status(): number {
    return this.wsClient.readyState;
  }

  constructor({
    getOnOpenFn,
    getOnErrorFn,
    onMessageHandlerFactoryProps,
  }: WebSocketControllerConstructorParamsType) {
    this.wsClient = new WebSocket(
      process.env.NODE_ENV === 'development'
        ? 'ws://localhost:8000'
        : 'ws://192.168.50.185:8000'
    );
    this.wsClient.onopen = getOnOpenFn(this);
    this.wsClient.onerror = getOnErrorFn(this);
    this.wsClient.onmessage = WebSocketController.getOnMessageHandler(
      onMessageHandlerFactoryProps
    );
  }

  private static getOnMessageHandler(
    onMessageHandlerFactoryExtraProps: OnRecordedDataWSMessageConfigType
  ) {
    return (message: MessageEvent) => {
      const parsedMessage = JSON.parse(message.data);
      const handler = WebSocketMessageHandlerFactory.getHandler(
        parsedMessage.type
      );
      handler(parsedMessage, onMessageHandlerFactoryExtraProps);
    };
  }

  sendMessage(message: string) {
    this.wsClient.send(message);
  }

  closeConnection() {
    this.wsClient.close();
  }
}

export default WebSocketController;
