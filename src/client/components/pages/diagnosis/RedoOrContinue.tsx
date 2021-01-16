import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { RedoOrContinueProps } from '../../../../types'

function RedoOrContinue({ recordedData, onReset }: RedoOrContinueProps) {
  return (
    <div className="Overlay-container">
      <Button type="button" onClick={onReset}>
        <FontAwesomeIcon icon={faRedoAlt} />
      </Button>
      <Link
        className="Overlay-link"
        to={{ pathname: '/postdiagnosis', state: { recordedData } }}
      >
        <Button type="button">
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Link>
    </div>
  )
}

export default RedoOrContinue
