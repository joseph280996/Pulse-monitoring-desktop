import { SetStateAction, useState } from 'react';
import { ReceivedDatum } from '../../types';
import useWebSocket from './useWebSocket';

type UseWebsocketParamsType = (
  existingData: ReceivedDatum[]
) => SetStateAction<ReceivedDatum[]>;

type UseSensorDataType = (
  setDataFn: UseWebsocketParamsType,
  controllerUUID?: string
) => UseSensorDataReturnType;

type UseSensorDataReturnType = {
  data: ReceivedDatum[];
  wsControllerUUID?: string;
  error?: ErrorEvent;
  readyState?: number;
  recordID?: number;
};

const useSensorData: UseSensorDataType = (setDataFn) => {
  const [data, setData] = useState<ReceivedDatum[]>([]);
  const [recordID, setRecordID] = useState<number>();
  const { error, readyState, controllerUUID } = useWebSocket({
    setData,
    setDataFn,
    setRecordID,
  });
  return {
    data,
    recordID,
    wsControllerUUID: controllerUUID,
    error,
    readyState,
  };
};
export default useSensorData;
