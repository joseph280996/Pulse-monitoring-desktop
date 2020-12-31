import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { DiagnosisComponentProps } from '../../../../types'
import LineChart from '../../analytics/LineChart'
import RedoOrContinue from './RedoOrContinue'

function Diagnostic({
  isFinished,
  data,
  width,
  height,
  onStart,
  onStop,
}: DiagnosisComponentProps) {
  return (
    <>
      {isFinished && <RedoOrContinue />}
      <div>
        <LineChart data={data} width={width} height={height - 50} />
      </div>
      <div className="Diagnosis-toolbarContainer">
        <Button
          type="button"
          onClick={onStart}
          className="Diagnosis-toolbarButton"
        >
          <FontAwesomeIcon icon={faPlay} />
        </Button>
        <Button
          type="button"
          onClick={onStop}
          className="Diagnosis-toolbarButton"
        >
          <FontAwesomeIcon icon={faStop} />
        </Button>
      </div>
    </>
  )
}

export default Diagnostic
