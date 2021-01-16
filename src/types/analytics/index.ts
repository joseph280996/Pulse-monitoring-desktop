import { MouseEventHandler } from 'react'

export interface LineChartProps {
  data: any
  width: number
  height: number
}

export type RecordedData = {
  time: number | string
  value: number | string
}
