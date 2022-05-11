import { v4 } from 'uuid';
import { ObjectWithStringIndexing } from '../../types';
import WebSocketController, {
  WebSocketControllerConstructorParamsType,
} from '../controller/WebSocketController';

type WSInstanceStoreType = ObjectWithStringIndexing;

class WebSocketFactory {
  private static wsInstanceStore: WSInstanceStoreType = {};

  static createWebSocketConnection(
    factoryProps: WebSocketControllerConstructorParamsType
  ): string {
    const wsInstance = new WebSocketController(factoryProps);
    const uuid = v4();
    this.wsInstanceStore[uuid] = wsInstance;
    return uuid;
  }

  static getWebSocketConnection(uuid?: string): null | WebSocketController {
    if (!uuid) {
      return null;
    }
    return this.wsInstanceStore[uuid];
  }

  static dispose(): void {
    Object.values(this.wsInstanceStore).forEach((wsInstance) =>
      wsInstance.ws().close()
    );
  }
}

export default WebSocketFactory;
