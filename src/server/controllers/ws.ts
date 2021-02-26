import WebSocket from 'ws'

type WSHandlerType = {
  regex: RegExp
  handler(client: WebSocket, params?: string): void
}

export default [
  {
    regex: /getSensorValue/i,
    handler: (client) => {
      client.send('')
    },
  },
] as WSHandlerType[]
