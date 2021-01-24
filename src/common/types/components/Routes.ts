import { ReactElement, ReactNode } from 'react'

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
