import { ReactElement, useState, SetStateAction, useCallback } from 'react';
import { Spinner } from 'react-bootstrap';
import { ReceivedDatum } from 'renderer/client/common/types';
import WebSocketController from 'renderer/client/common/utils/factory/WebSocketControllerFactory';
import useSensorData from 'renderer/client/common/utils/hooks/useSensorData';
import useWindowDimensions from '../../../common/utils/hooks/useWindowDimensions';
import LoadingSpinner from '../../../components/LoadingSpinner';
import DiagnosisPageComponent from '../../../components/pages/DiagnosisPage/DiagnosisPage';

const setDataFn =
  (newData: ReceivedDatum[]): SetStateAction<ReceivedDatum[]> =>
  (prevData: ReceivedDatum[]): ReceivedDatum[] => {
    const newDataArr = [...prevData, ...newData];
    if (newDataArr.length > 100) {
      return newDataArr.slice(-100);
    }
    return newDataArr;
  };

function DiagnosisPageContainer(): ReactElement {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [recordedStartTime, setRecordedStartTime] = useState<
    number | undefined
  >();
  const [recordedEndIndex, setEndIndex] = useState<number | undefined>();

  const { height, width } = useWindowDimensions(20);

  const { data, wsControllerUUID, error, readyState, recordID } =
    useSensorData(setDataFn);

  const connection =
    WebSocketController.getWebSocketConnection(wsControllerUUID);

  const onStart = useCallback(() => {
    setIsStarted(true);
    connection?.sendMessage('start');
  }, [connection]);

  const onReset = useCallback(() => {
    setRecordedStartTime(undefined);
    setEndIndex(undefined);
    connection?.sendMessage('start');
    setIsFinished(false);
  }, [connection]);

  const onRecordHandler = useCallback(() => {
    setRecordedStartTime(data[data.length - 1].timeStamp);
  }, [data]);

  const onStopHandler = useCallback(() => {
    connection?.sendMessage(
      `stop {"startTime": ${
        recordedEndIndex ? data[recordedEndIndex].timeStamp : 0
      }, "endTime":${data[data.length - 1].timeStamp}}`
    );
    setIsFinished(true);
    setEndIndex(data.length);
  }, [connection, data, recordedEndIndex]);

  if (!readyState || readyState === WebSocket.CONNECTING)
    return <Spinner animation="border" role="status" />;

  if (error) return <LoadingSpinner message={error.message} />;

  return (
    <DiagnosisPageComponent
      isStarted={isStarted}
      height={height}
      width={width}
      isFinished={isFinished}
      data={data}
      onStart={onStart}
      onRecord={onRecordHandler}
      onStop={onStopHandler}
      onReset={onReset}
      recordedStartTime={recordedStartTime}
      recordedEndIndex={recordedEndIndex}
      recordID={recordID}
    />
  );
}

export default DiagnosisPageContainer;
