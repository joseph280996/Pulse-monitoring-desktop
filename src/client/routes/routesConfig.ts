import Diagnosis from '../containers/pages/Diagnosis'
import AuthPage from '../containers/pages/AuthPage'
import { Route } from '../types'

const routesConfig: Route[] = [
  {
    route: '/',
    isPrivate: true,
    Component: Diagnosis,
  },
  {
    route: '/auth',
    Component: AuthPage,
  },
]

export default routesConfig
