import { MouseEventHandler } from 'react';
import { FormikProps } from 'formik';
import { ReceivedDatum } from '../../../utils/hooks/useSensorData';
import { ILineChartProps } from '../../Chart/LineChart/LineChartTypes';

export type PostDiagnosisFormProps = {
  data: ReceivedDatum[];
  pulseTypeID: number;
  patientName: string;
  handPositionID: number;
};
export interface IPostDiagnosisProps
  extends ILineChartProps,
    FormikProps<PostDiagnosisFormProps> {
  onClick?: MouseEventHandler;
}
