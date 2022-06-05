import { FormikProps } from 'formik';
import { MouseEventHandler } from 'react';
import { ReceivedDatum } from 'renderer/client/types';
import { ILineChartProps } from '../../components/Chart/LineChart';

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

export interface IPostDiagnosisFormContainerProp extends ILineChartProps {
  initialValues: PostDiagnosisFormProps;
}
