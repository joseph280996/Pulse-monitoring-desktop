import { SetStateAction, useEffect, useState } from 'react';
import { ReceivedDatum, WSMessageType } from '../../common/types';
import WebSocketController from '../controller/WebSocketController';
import useWebSocket from './useWebSocket';

type UseWebsocketParamsType = (
  existingData: WSMessageType
) => SetStateAction<ReceivedDatum[]>;

type UseSensorDataType = (
  setDataFn: UseWebsocketParamsType
) => UseSensorDataReturnType;

type UseSensorDataReturnType = {
  data: ReceivedDatum[];
  error?: ErrorEvent;
  readyState?: number;
  recordID?: number;
  wsController: WebSocketController | null;
};

const useSensorData: UseSensorDataType = (setDataFn) => {
  const [data, setData] = useState<ReceivedDatum[]>([]);
  const [recordID, setRecordID] = useState<number>();
  const { error, readyState, wsController } = useWebSocket({
    setData,
    setDataFn,
    setRecordID,
  });

  return {
    data,
    recordID,
    wsController,
    error,
    readyState,
  };
};
export default useSensorData;
