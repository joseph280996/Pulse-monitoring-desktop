import { ReactElement } from 'react'
import { FormikConfig, FormikValues } from 'formik'
import { SchemaOf } from 'yup'
import { AuthType } from '../auth'

type OnSubmitType = (formValues: FormikValues) => void
type FieldsComponent = (...any: any[]) => ReactElement

export type FormProps = {
  FieldsComponent: FieldsComponent
  initialValues: FormikConfig<FormikValues>
  onSubmit: OnSubmitType
  validationSchema: SchemaOf<AuthType>
}
