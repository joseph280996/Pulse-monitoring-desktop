import Diagnosis from '../containers/pages/Diagnosis'
import AuthPage from '../containers/pages/AuthPage'
import { Route } from '../../types'
import NotFoundPage from '../containers/pages/404'

const routesConfig: Route[] = [
  {
    route: '/auth',
    Component: AuthPage,
  },
  {
    route: '/',
    isPrivate: true,
    Component: Diagnosis,
  },
  {
    route: '*',
    Component: NotFoundPage,
  },
]

export default routesConfig
