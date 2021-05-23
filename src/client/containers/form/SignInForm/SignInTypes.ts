import { FC, MouseEventHandler } from 'react'
import { AnySchema } from 'yup'
import { IBasicAuthType } from '../../../common/utils/context/AuthContext'
import { IField } from '../../../components/types'

export interface FieldConfig extends Omit<IField, 'name' | 'value'> {
  FieldComponent?: FC<any>
  label?: string
  name: keyof IBasicAuthType
  placeholder: string
  validate: AnySchema
  onClick?: MouseEventHandler
}

export type FakeAuthResolveType = {
  isSignedIn: boolean
}
