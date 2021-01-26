import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { DiagnosisTypes } from '../../../../common/types'

function RedoOrContinue({
  recordedData,
  onReset,
}: DiagnosisTypes.RedoOrContinueProps) {
  return (
    <div className="Overlay-container">
      <div className="Overlay-redoWrapper">
        <Button className="Overlay-button" type="button" onClick={onReset}>
          <FontAwesomeIcon icon={faRedoAlt} />
        </Button>
      </div>
      <Link
        className="Overlay-link"
        to={{ pathname: '/postdiagnosis', state: { recordedData } }}
      >
        <Button className="Overlay-button" type="button">
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Link>
    </div>
  )
}

export default RedoOrContinue
