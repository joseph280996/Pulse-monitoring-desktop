import React from 'react'
import { ILineChartProps } from '../../../components/Chart/LineChart/LineChartTypes'

type FormikValuesType = {
  pulsePositionID: number
}

export interface IDiagnosisFormProps extends ILineChartProps {
  isStarted: boolean
  isFinished: boolean
  onStart: React.MouseEventHandler
  onReset: React.MouseEventHandler
  onRecord: React.MouseEventHandler
  onStop: React.MouseEventHandler
  recordedStartIndex: number | undefined
  recordedEndIndex: number | undefined
}

export default FormikValuesType
