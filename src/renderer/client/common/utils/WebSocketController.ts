type WebSocketControllerConstructorParamsType = {
  onOpen: null | (() => void)
  onError: null | ((error: Event) => void)
}

interface IWebSocketController {
  ws(): WebSocket
}

class WebSocketController implements IWebSocketController {
  private wsClient: WebSocket

  ws(): WebSocket {
    return this.wsClient
  }

  constructor({
    onOpen = null,
    onError = null,
  }: WebSocketControllerConstructorParamsType) {
    this.wsClient = new WebSocket(
      process.env.NODE_ENV === 'development'
        ? 'ws://localhost:8000'
        : 'ws://192.168.50.185:8000',
    )
    this.wsClient.onopen = onOpen
    this.wsClient.onerror = onError
  }
}

export default WebSocketController
