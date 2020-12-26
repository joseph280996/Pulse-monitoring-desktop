import { Dispatch, SetStateAction } from 'react'
import { ObjectKeys } from '../types'

export interface BasicAuthType extends ObjectKeys {
  username: string
  password: string
}

export interface AuthType extends BasicAuthType {
  confirmPass?: string
  isSignedIn: boolean
}

export type AuthContextValues = {
  auth: AuthType
  setAuth?: Dispatch<SetStateAction<AuthType>>
}
