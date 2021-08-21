import ExportDataOrDiagnosisPage from '../../components/pages/ExportDataOrDiagnosisPage'
import NotFoundPage from '../../components/pages/NotFound'
import AuthPage from './auth/AuthPage'
import Diagnosis from './Diagnosis'
import Finish from './Finish'
import PostDiagnosis from './PostDiagnosis'
import ExportData from './ExportData'

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
    route: '/export-data',
    isPrivate: true,
    Component: ExportData,
  },
  {
    route: '*',
    Component: NotFoundPage,
  },
]
