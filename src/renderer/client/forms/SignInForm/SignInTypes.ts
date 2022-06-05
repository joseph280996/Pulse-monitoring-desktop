import { FormikProps } from 'formik';
import { FieldConfig } from 'renderer/client/components/types';
import { IBasicAuthType } from 'renderer/client/utils/context/AuthContext';

export type FakeAuthResolveType = {
  isSignedIn: boolean;
};

export interface ISignInFormProps extends FormikProps<IBasicAuthType> {
  fields: FieldConfig[];
}
