import { MouseEventHandler } from 'react'
import { LineChartProps, RecordedData } from '../analytics'

export type PostDiagnosisLocationState = {
  recordedData: RecordedData[]
}

export interface PostDiagnosisProps extends LineChartProps {
  onClick?: MouseEventHandler
}
