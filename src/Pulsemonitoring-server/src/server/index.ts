/* eslint-disable no-await-in-loop */
import http from 'http'
import cors from 'cors'
import Express, { json, urlencoded } from 'express'
import WebSocket, { Server as WebSocketServer } from 'ws'
import db from './db'
import { RouteType } from './routes'
import { WebsocketMessageTypeHandler } from './wsMessageTypeHandlers'

interface ServerInterface {
  cleanUp: () => void
}

type ExpressApp = Express.Express & {
  [key: string]: any
}

class Server implements ServerInterface {
  private wss: WebSocketServer

  private app: ExpressApp

  private server: http.Server

  constructor() {
    this.app = Express()
    this.server = http.createServer(this.app)
    this.wss = new WebSocketServer({ server: this.server })
    this.app.use(cors())
    this.app.use(json())
    this.app.use(
      urlencoded({
        extended: true,
      }),
    )
  }

  registerRoutes(routes: RouteType[]) {
    routes.forEach(({ method, route, handler }) => {
      this.app[method](route, handler)
    })
  }

  registerWebsocketMessageTypes(messageTypes: WebsocketMessageTypeHandler[]) {
    this.wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
      // eslint-disable-next-line no-console
      console.log(`Connection from ${req.socket.remoteAddress}`)
      ws.on('message', (message: string) => {
        messageTypes.forEach(({ regExp, handler }) => {
          if (regExp.test(message)) {
            handler(message.replace(regExp, ''), ws)
          }
        })
      })
    })
  }

  cleanUp = () => {
    if (this.wss) {
      this.wss.close()
    }
    if (db.hasPoolOpened()) {
      db.cleanUp()
    }
  }

  start = (port: number) => {
    this.server.listen(port, () => {
      console.log(`Server started at localhost port ${port}`)
    })
  }
}
export default new Server()
