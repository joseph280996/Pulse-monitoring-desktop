import { RouteType } from '../../../router/router'
import ChangeUsername from './ChangeUsername'
import ForgotPass from './ForgotPass'
import SignIn from './SignIn'

export default [
  {
    route: `/auth/signin`,
    Component: SignIn,
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
