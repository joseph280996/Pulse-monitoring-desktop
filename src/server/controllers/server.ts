import express, { Express } from 'express'
import http from 'http'
import WebSocket from 'ws'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import HTTPRequestConfigs from './http'
import WSHandlers from './ws'

interface ServerInterface {
  start(): void
  destroy(): void
}

class Server implements ServerInterface {
  private server: http.Server

  private expressApp: Express

  private wss: WebSocket.Server

  private port: number

  constructor(port: number) {
    this.port = port
    this.expressApp = express()
    this.expressApp.use(cors())
    this.expressApp.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    )
    this.expressApp.use(bodyParser.json())
    this.expressApp.use(helmet())
    this.server = http.createServer(this.expressApp)
    this.wss = new WebSocket.Server({ server: this.server })
  }

  private registerHTTPRoutes() {
    HTTPRequestConfigs.forEach(({ route, method, handler }) => {
      switch (method) {
        case 'get':
          this.expressApp.get(route, handler)
          break
        case 'post':
          this.expressApp.post(route, handler)
          break
        default:
          console.error('Unsupported request type')
      }
    })
  }

  private registerWSHandlers() {
    this.wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (message: string) => {
        WSHandlers.forEach(({ regex, handler }) => {
          if (regex.test(message)) {
            handler(ws, message.replace(regex, ''))
          }
        })
      })
    })
  }

  start() {
    this.registerHTTPRoutes()
    this.registerWSHandlers()
    this.server.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`🚀 Server ready at http://localhost:${this.port}`)
      // eslint-disable-next-line no-console
      console.log(`🚀 Websocket ready at ws://localhost:${this.port}`)
    })
  }

  destroy() {
    this.wss.clients.forEach((client) => client.close(1012))
    this.wss.close()
  }
}

export default Server
