import React, { ReactElement } from 'react'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import LineChart from '../../components/analytics/LineChart'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Diagnosis(): ReactElement {
  const { height, width } = useWindowDimensions(20)
  return (
    <>
      <div>
        <LineChart width={width} height={height - 50} />
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
