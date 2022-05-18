import { ReactElement, useState, SetStateAction, useCallback } from 'react';
import { Spinner } from 'react-bootstrap';
import { ReceivedDatum, WSMessageType } from 'renderer/client/common/types';
import useSensorData from 'renderer/client/common/utils/hooks/useSensorData';
import useWindowDimensions from '../../../common/utils/hooks/useWindowDimensions';
import LoadingSpinner from '../../../components/LoadingSpinner';
import DiagnosisPageComponent from '../../../components/pages/DiagnosisPage/DiagnosisPage';

const setDataFn =
  (newData: WSMessageType): SetStateAction<ReceivedDatum[]> =>
  (prevData: ReceivedDatum[]): ReceivedDatum[] => {
    const newDataArr = [...prevData, ...newData.recordedData];
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

  const { data, error, readyState, recordID, wsController } =
    useSensorData(setDataFn);

  const onStart = useCallback(() => {
    setIsStarted(true);
    wsController?.sendMessage('start');
  }, [wsController]);

  const onReset = useCallback(() => {
    setRecordedStartTime(undefined);
    setEndIndex(undefined);
    wsController?.sendMessage('start');
    setIsFinished(false);
  }, [wsController]);

  const onRecordHandler = useCallback(() => {
    setRecordedStartTime(data[data.length - 1].timeStamp);
  }, [data]);

  const onStopHandler = useCallback(() => {
    wsController?.sendMessage(
      `stop ${JSON.stringify({
        startTime: recordedEndIndex ? data[recordedEndIndex].timeStamp : 0,
        endTime: data[data.length - 1].timeStamp,
      })}`
    );
    setIsFinished(true);
    setEndIndex(data.length);
  }, [wsController, data, recordedEndIndex]);

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
