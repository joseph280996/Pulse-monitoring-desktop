import React, { FC, PropsWithChildren, ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Route as RouteType } from '../../types'
import PrivateRoute from '../components/PrivateRoute'

type RouteComponentType = typeof Route | ((param: any) => ReactElement)
type RoutesProps = {
  routes: RouteType[]
}

const Routes: FC<RoutesProps> = ({
  routes,
  children,
}: PropsWithChildren<RoutesProps>) => {
  return (
    <Switch>
      {routes.map(
        ({ route, Component, isPrivate = false, isExact = false }) => {
          const RouteComponent: RouteComponentType = isPrivate
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
