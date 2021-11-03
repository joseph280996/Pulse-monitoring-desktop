import { RequestHandler } from 'express'
import getHandPositions from './handPositionsHandlers'
import getPulseTypes from './pulseTypesHandlers'
import recordData, { exportData } from './recordsHandlers'

export type RouteType = {
  method: string
  route: string
  handler: RequestHandler
}
export default [
  {
    method: 'get',
    route: '/pulse-type',
    handler: getPulseTypes,
  },
  {
    method: 'get',
    route: '/hand-position',
    handler: getHandPositions,
  },
  {
    method: 'post',
    route: '/record',
    handler: recordData,
  },
  {
    method: 'post',
    route: '/data',
    handler: exportData,
  },
] as RouteType[]
