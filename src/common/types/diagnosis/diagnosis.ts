import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { LineMarkSeriesPoint } from 'react-vis'
import { LineChartProps, RecordedData } from '../analytics'

export interface RedoOrContinueProps {
  onReset: MouseEventHandler
  recordedData: RecordedData[] | LineMarkSeriesPoint[]
}

export interface DiagnosisComponentProps extends LineChartProps {
  onReset: MouseEventHandler
  isFinished: boolean
  onRecord: MouseEventHandler
  onStop: MouseEventHandler
  recordedStartIndex: number | null
  recordedEndIndex: number | null
}

export type SensorDataContextValues = {
  data: string[]
  setData?: Dispatch<SetStateAction<string[]>>
}
