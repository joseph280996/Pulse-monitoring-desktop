type WebSocketControllerConstructorParams = {
  onOpen: () => void
  onMessage: (message: MessageEvent) => void
  onError: (error: Event) => void
}

interface WebSocketControllerInterface {
  ws(): WebSocket
}
class WebSocketController implements WebSocketControllerInterface {
  private wsClient: WebSocket

  ws() {
    return this.wsClient
  }

  constructor({
    onOpen,
    onMessage,
    onError,
  }: WebSocketControllerConstructorParams) {
    this.wsClient = new WebSocket('ws://localhost:3000')
    this.wsClient.onopen = onOpen
    this.wsClient.onmessage = onMessage
    this.wsClient.onerror = onError
  }
}

export default WebSocketController
