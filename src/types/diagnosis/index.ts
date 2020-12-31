import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export * from './mode'

export type DiagnosisComponentProps = {
  isFinished: boolean
  data: any[]
  width: number
  height: number
  onStart: MouseEventHandler
  onStop: MouseEventHandler
}

export type SensorDataContextValues = {
  data: string[]
  setData?: Dispatch<SetStateAction<string[]>>
}
