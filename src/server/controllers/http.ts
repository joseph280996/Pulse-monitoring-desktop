import { RequestHandler } from 'express'

interface RequestConfig {
  route: string
  method: string
  handler: RequestHandler
}

export default [
  {
    route: '/',
    method: 'get',
    handler: (_, res) => {
      res.send('hello')
    },
  },
] as RequestConfig[]
