import { ReactElement, ReactNode } from 'react'

export * as authTypes from './auth'
export * as formTypes from './form'
export interface Route extends RouteProps {
  isPrivate?: boolean | null | undefined
  isExact?: boolean | null | undefined
}
export interface RouteProps {
  Component?: ReactNode
  component?: ReactNode
  render?: () => ReactElement
  route: string
}
