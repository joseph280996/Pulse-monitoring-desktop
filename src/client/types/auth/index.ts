import { Dispatch, SetStateAction } from 'react'

export type AuthType = {
  username: string
  password?: string
  confirmPass?: string
  isSignedIn: boolean
}

export type AuthContextValues = {
  auth: AuthType
  setAuth: Dispatch<SetStateAction<AuthType>> | null
}
