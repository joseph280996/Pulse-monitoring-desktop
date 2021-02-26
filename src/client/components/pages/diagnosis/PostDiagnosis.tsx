import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React from 'react'
import { Button } from 'react-bootstrap'
import { DiagnosisTypes } from '../../../../common/types'
import LineChart from '../../analytics/LineChart'
import PulseTypeSelect from './PulseTypeSelect'

function PostDiagnosis({
  data,
  width,
  height,
  initialValues,
  onSubmit,
}: DiagnosisTypes.PostDiagnosisProps) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  })
  return (
    <div className="PostDiagnosis">
      <LineChart data={data} width={width} height={height} />
      <div className="PostDiagnosis-buttonContainer">
        <form onSubmit={handleSubmit}>
          <PulseTypeSelect onChange={handleChange} value={values.pulseTypeID} />
          <Button className="PostDiagnosis-button" type="submit">
            <FontAwesomeIcon
              className="Icon Icon-confirm"
              icon={faCheckCircle}
            />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default PostDiagnosis
