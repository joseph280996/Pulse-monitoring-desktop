import { ChangeEvent, ReactElement } from 'react'
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

interface Field {
  type: string
  name: string
  disabled?: boolean
  error?: boolean
  value?: unknown
  required?: boolean
}

export interface TextFieldProps extends Field {
  onChange?: (e: ChangeEvent<unknown>) => void
  onBlur?: (e: unknown) => void
  placeholder: string
  helperText?: string
  label: string
}
