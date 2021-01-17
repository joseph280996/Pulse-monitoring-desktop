import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PostDiagnosisProps } from '../../../../common/types'
import LineChart from '../../../containers/analytics/LineChart'

function PostDiagnosis({ data, width, height, onClick }: PostDiagnosisProps) {
  return (
    <div>
      <LineChart data={data} width={width} height={height} />
      <div>
        <Link to="/finish">
          <Button type="button" onClick={onClick}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PostDiagnosis
