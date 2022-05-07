import { useEffect, SetStateAction, useState } from 'react';
import WebSocketController from '../controller/WebSocketController';

export type ReceivedDatum = {
  timeStamp: number;
  data: number;
};

type UseWebsocketParamsType = (
  newData: ReceivedDatum[]
) => SetStateAction<ReceivedDatum[]>;

type UseSensorDataType = (
  setDataFn: UseWebsocketParamsType,
  controllerUUID?: string
) => ReceivedDatum[];

const useSensorData: UseSensorDataType = (
  setDataFn,
  controllerUUID
): ReceivedDatum[] => {
  const [data, setData] = useState<ReceivedDatum[]>([]);
  useEffect(() => {
    const connection =
      WebSocketController.GetWebSocketConnection(controllerUUID);
    if (connection) {
      connection.ws().onmessage = (message: MessageEvent) => {
        if (/recordedData/i.test(message.data)) {
          const recordedData = JSON.parse(
            message.data.replace(/recordedData/i, '')
          )?.recordedData;
          setData(setDataFn(recordedData));
        }
      };
    }
  }, [controllerUUID, setDataFn]);
  return data;
};
export default useSensorData;
