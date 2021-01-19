import { Pool, queryCallback } from 'mysql'
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

export interface DB {
  query: (
    query: string,
    values: Array<any>,
    callback?: queryCallback,
  ) => Promise<any>
  cleanup: () => void
}

export interface ADS1115Interface {
  gain(): number
  gain(level: string): number
  measure: (mux: string) => Promise<number>
}
