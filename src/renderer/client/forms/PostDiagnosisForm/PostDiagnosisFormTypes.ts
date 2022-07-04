import { FormikProps } from 'formik';
import { MouseEventHandler } from 'react';
import { ILineChartProps } from '../../components/Chart/LineChart';

export type PostDiagnosisFormProps = {
  recordID: number;
  pulseTypeID: number;
  patientName: string;
};
export interface IPostDiagnosisProps
  extends ILineChartProps,
    FormikProps<PostDiagnosisFormProps> {
  onClick?: MouseEventHandler;
}

export interface IPostDiagnosisFormContainerProp extends ILineChartProps {
  initialValues: PostDiagnosisFormProps;
}
