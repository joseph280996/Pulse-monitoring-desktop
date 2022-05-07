import { MouseEventHandler } from 'react';
import { ILineChartProps } from '../../../components/Chart/LineChart/LineChartTypes';

type FormikValuesType = {
  pulsePositionID: number;
};

export interface IDiagnosisFormProps extends ILineChartProps {
  isStarted: boolean;
  isFinished: boolean;
  onStart: MouseEventHandler;
  onReset: MouseEventHandler;
  onRecord: MouseEventHandler;
  onStop: MouseEventHandler;
  recordedStartTime: number | undefined;
  recordedEndIndex: number | undefined;
}

export default FormikValuesType;
