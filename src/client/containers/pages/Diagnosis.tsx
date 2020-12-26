import React, { ReactElement } from 'react'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

function Diagnosis(): ReactElement {
  return (
    <>
      <div>
        <div>Chart</div>
      </div>
      <div className="Diagnosis-toolbarContainer">
        <Button type="button" className="Diagnosis-toolbarButton">
          <FontAwesomeIcon icon={faStop} />
        </Button>
        <Button type="button" className="Diagnosis-toolbarButton">
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </>
  )
}

export default Diagnosis
