import { FormikProps } from 'formik'
import { BasicAuthType } from './authTypes'

export interface SignInComponentProps extends FormikProps<BasicAuthType> {
  submitting: boolean
}
