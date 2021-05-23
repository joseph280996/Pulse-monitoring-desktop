import NotFoundPage from '../../components/pages/NotFound'
import AuthPage from './Auth/AuthPage'
import Diagnosis from './Diagnosis'
import ExportDataOrDiagnosisPage from './ExportDataOrDiagnosis'
import Finish from './Finish'
import PostDiagnosis from './PostDiagnosis'

export default [
  {
    route: '/auth',
    Component: AuthPage,
  },
  {
    route: '/export',
    isPrivate: true,
    Component: ExportDataOrDiagnosisPage,
  },
  {
    route: '/',
    isPrivate: true,
    isExact: true,
    Component: Diagnosis,
  },
  {
    route: '/postdiagnosis',
    isPrivate: true,
    Component: PostDiagnosis,
  },
  {
    route: '/finish',
    isPrivate: true,
    Component: Finish,
  },
  {
    route: '*',
    Component: NotFoundPage,
  },
]
