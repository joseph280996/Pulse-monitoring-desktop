import { FormikProps } from 'formik'
import { IBasicAuthType } from '../../../common/utils/context/AuthContext'
import { FieldConfig } from '../../../containers/form/SignInForm/SignInTypes'

export interface ISignInFormProps extends FormikProps<IBasicAuthType> {
  fields: FieldConfig[]
}
