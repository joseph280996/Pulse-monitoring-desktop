import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { LineMarkSeriesPoint } from 'react-vis'
import { LineChartProps, RecordedData } from '../analytics'

export interface RedoOrContinueProps {
  onReset: MouseEventHandler
  recordedData: RecordedData[] | LineMarkSeriesPoint[]
}

export interface DiagnosisComponentProps
  extends RedoOrContinueProps,
    LineChartProps {
  isFinished: boolean
  onRecord: MouseEventHandler
  onStop: MouseEventHandler
  recordStarted: boolean
}

export type SensorDataContextValues = {
  data: string[]
  setData?: Dispatch<SetStateAction<string[]>>
}
