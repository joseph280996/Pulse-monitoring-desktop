import { FormikProps } from 'formik';
import { IBasicAuthType } from '../../../utils/context/AuthContext';
import { FieldConfig } from '../../types';

export interface ISignInFormProps extends FormikProps<IBasicAuthType> {
  fields: FieldConfig[];
}
