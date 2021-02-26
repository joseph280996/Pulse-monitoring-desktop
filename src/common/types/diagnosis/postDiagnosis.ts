import { FormikConfig } from 'formik'
import { MouseEventHandler } from 'react'
import { LineChartProps, RecordedData } from '../analytics'

export type PostDiagnosisLocationState = {
  recordedData: RecordedData[]
}

export interface PostDiagnosisProps
  extends LineChartProps,
    FormikConfig<PostDiagnosisFormProps> {
  onClick?: MouseEventHandler
}

type PostDiagnosisFormProps = {
  pulse: string
  pulseTypeID: number
}
