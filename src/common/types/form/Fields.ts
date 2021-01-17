import { ReactElement } from 'react'

export type FieldsComponent = (...any: any[]) => ReactElement

export interface Field {
  type: string
  name: string
  disabled?: boolean
  error?: boolean
  value: string | number | readonly string[] | undefined
  required?: boolean
  className?: string
}
