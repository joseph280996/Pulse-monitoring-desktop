import { faCircle, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import classnames from 'classnames'
import { DiagnosisComponentProps } from '../../../../types'
import LineChart from '../../../containers/analytics/LineChart'
import RedoOrContinue from './RedoOrContinue'

const RecordButton = ({ onRecord }: { onRecord: MouseEventHandler }) => {
  return (
    <Button type="button" onClick={onRecord} className="Diagnosis-button">
      <span className="fa-stack fa-2x">
        <FontAwesomeIcon
          className="fa-stack-2x Icon-recording"
          icon={faCircle}
        />
        <span
          className={classnames('fa-stack-1x', 'Diagnosis-buttonTextRecord')}
        >
          REC
        </span>
      </span>
    </Button>
  )
}

const StopButton = ({ onStop }: { onStop: MouseEventHandler }) => {
  return (
    <Button type="button" onClick={onStop} className="Diagnosis-button">
      <span className="fa-stack fa-2x">
        <FontAwesomeIcon className="fa-stack-2x Icon-stop" icon={faStop} />
        <span className={classnames('fa-stack-1x', 'Diagnosis-buttonTextStop')}>
          STOP
        </span>
      </span>
    </Button>
  )
}

function Diagnostic({
  isFinished,
  data,
  width,
  height,
  onRecord,
  onStop,
  onReset,
  recordedData,
  recordStarted,
}: DiagnosisComponentProps) {
  return (
    <div className="Diagnosis" style={{ maxHeight: height }}>
      {isFinished && (
        <RedoOrContinue onReset={onReset} recordedData={recordedData} />
      )}
      <div>
        <LineChart data={data} width={width} height={height - 100} />
      </div>
      <div className="Diagnosis-toolbarContainer">
        {recordStarted ? (
          <StopButton onStop={onStop} />
        ) : (
          <RecordButton onRecord={onRecord} />
        )}
      </div>
    </div>
  )
}

export default Diagnostic
