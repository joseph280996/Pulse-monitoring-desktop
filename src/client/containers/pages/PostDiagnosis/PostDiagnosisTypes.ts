import { ReceivedDatum } from '../../../common/utils/hooks/useWebSocket'

export type PostDiagnosisLocationState = {
  recordedData: ReceivedDatum[]
  handPositionID: number
}
