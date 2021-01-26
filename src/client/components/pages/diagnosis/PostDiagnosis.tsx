import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DiagnosisTypes } from '../../../../common/types'
import LineChart from '../../../containers/analytics/LineChart'

function PostDiagnosis({
  data,
  width,
  height,
  onClick,
}: DiagnosisTypes.PostDiagnosisProps) {
  return (
    <div className="PostDiagnosis">
      <LineChart data={data} width={width} height={height} />
      <div className="PostDiagnosis-buttonContainer">
        <Link className="PostDiagnosis-link" to="/finish">
          <Button
            className="PostDiagnosis-button"
            type="button"
            onClick={onClick}
          >
            <FontAwesomeIcon
              className="Icon Icon-confirm"
              icon={faCheckCircle}
            />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PostDiagnosis
