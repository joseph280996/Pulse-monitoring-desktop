import { ChangeEvent } from 'react'
import { FormikConfig, FormikValues } from 'formik'
import { SchemaOf } from 'yup'
import { AuthType } from '../auth'
import { FieldsComponent, Field } from './Fields'

export * from './Button'

type OnSubmitType = (formValues: FormikValues) => void

export type FormProps = {
  FieldsComponent: FieldsComponent
  initialValues: FormikConfig<FormikValues>
  onSubmit: OnSubmitType
  validationSchema: SchemaOf<AuthType>
}

export interface TextFieldProps extends Field {
  onChange?: (e: ChangeEvent<unknown>) => void
  onBlur?: (e: unknown) => void
  placeholder: string
  helperText?: string
  label: string
}

export interface FieldConfig {
  FieldComponent?: (param: TextFieldProps) => JSX.Element
  label: string
  type: string
  name: string
  placeholder: string
}
