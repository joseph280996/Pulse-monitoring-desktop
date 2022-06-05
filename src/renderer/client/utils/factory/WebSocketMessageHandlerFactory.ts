import { WS_MESSAGE_TYPE } from '../variables';
import onRecordedDataWSMessage from '../onRecordedDataWSMessage';
import onRecordIDWsMessage from '../onRecordIDWsMessage';

type WebSocketMessageHandlerFactoryReturnType = (...rest: any) => void;

class WebSocketMessageHandlerFactory {
  static getHandler(
    handlerType: string
  ): WebSocketMessageHandlerFactoryReturnType {
    try {
      if (handlerType === WS_MESSAGE_TYPE.RECORDED_DATA) {
        return onRecordedDataWSMessage;
      }
      if (handlerType === WS_MESSAGE_TYPE.DB_RECORD_ID) {
        return onRecordIDWsMessage;
      }

      throw new Error('Unsupported message type requested');
    } catch (error) {
      const castedError = error as Error;
      // eslint-disable-next-line no-console
      console.error(castedError.message);
      return () => {};
    }
  }
}

export default WebSocketMessageHandlerFactory;
