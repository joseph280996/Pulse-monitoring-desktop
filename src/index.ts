import dotenv from 'dotenv'
import Server from './server'
import routes from './server/routes'
import wsMessageTypeHandlers from './server/wsMessageTypeHandlers'

dotenv.config()

Server.registerRoutes(routes)
Server.registerWebsocketMessageTypes(wsMessageTypeHandlers)
Server.start(8000)

process.on('beforeExit', () => {
  Server.cleanUp()
})

process.on('SIGINT', () => {
  process.exit(2)
})
