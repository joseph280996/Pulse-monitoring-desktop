import Diagnosis from '../containers/pages/diagnosis/Diagnosis'
import AuthPage from './AuthRoutes'
import { Route } from '../../types'
import NotFoundPage from '../components/pages/404'
import PostDiagnosis from '../containers/pages/diagnosis/PostDiagnosis'

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
