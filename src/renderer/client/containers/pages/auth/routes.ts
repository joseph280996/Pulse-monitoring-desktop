import SignInPage from '../../../components/pages/signin'
import { RouteType } from '../../../router/router'
import ChangeUsername from './ChangeUsername'
import ForgotPass from './ForgotPass'

export default [
  {
    route: `/auth/signin`,
    Component: SignInPage,
  },
  {
    route: `/auth/forgotpass`,
    Component: ForgotPass,
  },
  {
    route: `/auth/changeusername`,
    Component: ChangeUsername,
  },
] as RouteType[]
