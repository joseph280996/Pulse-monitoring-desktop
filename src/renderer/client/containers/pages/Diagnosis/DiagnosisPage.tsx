import * as React from 'react'
import { Spinner } from 'react-bootstrap'
import useWebSocket, {
  ReceivedDatum,
} from '../../../common/utils/hooks/useWebSocket'
import useWindowDimensions from '../../../common/utils/hooks/useWindowDimensions'
import LoadingSpinner from '../../../components/LoadingSpinner'
import DiagnosisPageComponent from '../../../components/pages/DiagnosisPage/DiagnosisPage'

function DiagnosisPageContainer(): React.ReactElement {
  const [isStarted, setIsStarted] = React.useState<boolean>(false)
  const [isFinished, setIsFinished] = React.useState<boolean>(false)
  const [recordedStartIndex, setRecordedIndex] =
    React.useState<number | undefined>()
  const [recordedEndIndex, setEndIndex] = React.useState<number | undefined>()
  const [data, setData] = React.useState<ReceivedDatum[]>([])

  const setDataFunc =
    (newData: ReceivedDatum[]): React.SetStateAction<ReceivedDatum[]> =>
    (prevData: ReceivedDatum[]): ReceivedDatum[] => {
      return [...prevData, ...newData]
    }

  const { height, width } = useWindowDimensions(20)
  const { error, readyState, wsClient } = useWebSocket({
    setData,
    setDataFunc,
  })
  const onStart = () => {
    setIsStarted(true)
    wsClient?.ws().send('start')
  }

  const onReset = () => {
    setRecordedIndex(undefined)
    setEndIndex(undefined)
    wsClient?.ws().send('start')
    setIsFinished(false)
  }

  const onRecordHandler = () => {
    setData([])
    setRecordedIndex(data.length)
  }
  const onStopHandler = () => {
    wsClient?.ws().send('stop')
    setIsFinished(true)
    setEndIndex(data.length)
  }
  if (!readyState || readyState === WebSocket.CONNECTING)
    return <Spinner animation="border" role="status" />

  if (error) return <LoadingSpinner message={error.message} />

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
      recordedStartIndex={recordedStartIndex}
      recordedEndIndex={recordedEndIndex}
    />
  )
}

export default DiagnosisPageContainer
