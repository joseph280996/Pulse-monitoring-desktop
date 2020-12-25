import { Dispatch, SetStateAction } from 'react'

interface ObjectKeys {
  [key: string]: unknown
}

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
