import { ReactElement, ReactNode } from 'react'

export * from './auth'
export * from './form'
export * from './hooks'
export * from './diagnosis'
export * from './analytics'
export * from './electron'
export interface RouteProps {
  Component?: ReactNode
  component?: ReactNode
  render?: () => ReactElement
  route: string
}
export interface Route extends RouteProps {
  isPrivate?: boolean
  isExact?: boolean
}
