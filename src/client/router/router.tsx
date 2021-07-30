import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../components/Route/PrivateRoute'

export interface RouteType {
  route: string
  Component: React.ReactNode
  isPrivate?: boolean
  isExact?: boolean
}
type RoutesProps = {
  routes: RouteType[]
}

const Routes: React.FC<RoutesProps> = ({
  routes,
  children,
}: React.PropsWithChildren<RoutesProps>) => {
  return (
    <Switch>
      {routes.map(
        ({ route, Component, isPrivate = false, isExact = false }) => {
          const RouteComponent: React.ComponentType<any> = isPrivate
            ? PrivateRoute
            : Route
          return (
            <RouteComponent
              key={route}
              path={route}
              exact={isExact}
              component={Component}
            />
          )
        },
      )}
      {children}
    </Switch>
  )
}

export default Routes
