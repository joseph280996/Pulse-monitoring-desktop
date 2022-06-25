import { MouseEventHandler } from 'react';
import { ILineChartProps } from '../../components/Chart/LineChart/LineChartTypes';

type FormikValuesType = {
  pulsePositionID: number;
  recordID: number;
};

export interface IDiagnosisFormProps extends ILineChartProps {
  isStarted: boolean;
  isFinished: boolean;
  onStart: MouseEventHandler;
  onReset: MouseEventHandler;
  onRecord: MouseEventHandler;
  onStop: (pulsePositionID: number) => MouseEventHandler;
  recordedStartTime?: number;
  recordID?: number;
}

export default FormikValuesType;
