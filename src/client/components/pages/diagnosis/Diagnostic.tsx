import { faCircle, faStop } from '@fortawesome/free-solid-svg-icons'
import React, { MouseEventHandler } from 'react'
import { DiagnosisTypes } from '../../../../common/types'
import LineChart from '../../../containers/analytics/LineChart'
import RedoOrContinue from './RedoOrContinue'
import { ButtonWithIcon } from '../../form/Button'

type RecordButtonProps = {
  onRecord: MouseEventHandler
}

const RecordButton = ({ onRecord }: RecordButtonProps) => {
  return (
    <ButtonWithIcon
      onClick={onRecord}
      className="Diagnosis-button"
      iconClassName="Icon Icon-recording"
      icon={faCircle}
      buttonTextClassName="Diagnosis-buttonTextRecord"
    />
  )
}

type StopButtonProps = {
  onStop: MouseEventHandler
}
const StopButton = ({ onStop }: StopButtonProps) => {
  return (
    <ButtonWithIcon
      onClick={onStop}
      className="Diagnosis-button"
      iconClassName="Icon Icon-stop"
      icon={faStop}
      buttonTextClassName="Diagnosis-buttonTextStop"
    />
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
}: DiagnosisTypes.DiagnosisComponentProps) {
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
