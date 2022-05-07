export type WebSocketControllerConstructorParamsType = {
  getOnOpenFn: (wsClient: WebSocketFactory) => null | (() => void);
  getOnErrorFn: (wsClient: WebSocketFactory) => null | ((error: Event) => void);
};

class WebSocketFactory {
  private wsClient: WebSocket;

  ws(): WebSocket {
    return this.wsClient;
  }

  constructor({
    getOnOpenFn,
    getOnErrorFn,
  }: WebSocketControllerConstructorParamsType) {
    this.wsClient = new WebSocket(
      process.env.NODE_ENV === 'development'
        ? 'ws://localhost:8000'
        : 'ws://192.168.50.185:8000'
    );
    this.wsClient.onopen = getOnOpenFn(this);
    this.wsClient.onerror = getOnErrorFn(this);
  }
}

export default WebSocketFactory;
