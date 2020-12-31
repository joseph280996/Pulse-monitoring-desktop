import Diagnosis from '../containers/pages/Diagnosis'
import AuthPage from '../containers/pages/AuthPage'
import { Route } from '../../types'
import NotFoundPage from '../components/pages/404'
import PostDiagnosis from '../components/pages/PostDiagnosis'

const routesConfig: Route[] = [
  {
    route: '/auth',
    Component: AuthPage,
  },
  {
    route: '/',
    isPrivate: true,
    isExact: true,
    Component: Diagnosis,
  },
  {
    route: '/postdiagnosis',
    Component: PostDiagnosis,
  },
  {
    route: '*',
    Component: NotFoundPage,
  },
]

export default routesConfig
