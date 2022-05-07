import { ReceivedDatum } from '../../../common/utils/hooks/useSensorData';

export type PostDiagnosisLocationState = {
  recordedData: ReceivedDatum[];
  handPositionID: number;
};
