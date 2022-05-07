import { v4 } from 'uuid';
import { ObjectWithStringIndexing } from '../../types';
import WebSocketFactory, {
  WebSocketControllerConstructorParamsType,
} from '../factory/WebSocketFactory';

type WSInstanceStoreType = ObjectWithStringIndexing;

class WebSocketController {
  private static wsInstanceStore: WSInstanceStoreType = {};

  static CreateWebSocketConnection(
    factoryProps: WebSocketControllerConstructorParamsType
  ): string {
    const wsInstance = new WebSocketFactory(factoryProps);
    const uuid = v4();
    this.wsInstanceStore[uuid] = wsInstance;
    return uuid;
  }

  static GetWebSocketConnection(uuid?: string): null | WebSocketFactory {
    if (!uuid) {
      return null;
    }
    return this.wsInstanceStore[uuid];
  }

  static Dispose(): void {
    Object.values(this.wsInstanceStore).forEach((wsInstance) =>
      wsInstance.ws().close()
    );
  }
}

export default WebSocketController;
