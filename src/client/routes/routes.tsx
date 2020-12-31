import React, { ReactElement } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import routes from './routesConfig'
import PrivateRoute from '../components/PrivateRoute'

type RouteComponentType = typeof Route | ((param: any) => ReactElement)

function Routes(): ReactElement {
  return (
    <Switch>
      {routes.map(({ route, Component, isPrivate, isExact }) => {
        const RouteComponent: RouteComponentType = isPrivate
          ? PrivateRoute
          : Route
        return (
          <RouteComponent
            key={route}
            path={route}
            isExact={isExact}
            component={Component}
          />
        )
      })}
    </Switch>
  )
}

export default withRouter(Routes)
