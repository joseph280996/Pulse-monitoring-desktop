import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import StyledButton from '../../Button'
import LineChart from '../../Chart/LineChart'
import { PulseTypeSelect } from '../../Select'
import TextField from '../../TextField'
import styles from './PostDiagnosisForm.scss'
import { IPostDiagnosisProps } from './PostDiagnosisFormTypes'

function PostDiagnosisFormComponent({
  data,
  width,
  height,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  setFieldTouched,
  setFieldValue,
  values,
  isSubmitting,
}: IPostDiagnosisProps): React.ReactElement {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="Patient Name"
        placeholder="Patient Name"
        error={errors.patientName}
        name="patientName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.patientName}
        required
      />
      <LineChart data={data} width={width} height={height} />
      <div className={styles['PostDiagnosis-buttonContainer']}>
        <PulseTypeSelect
          name="pulseTypeID"
          onBlur={() => {
            setFieldTouched('pulseTypeID', true)
          }}
          onChange={(event) => setFieldValue('pulseTypeID', event.target.value)}
          value={values.pulseTypeID}
        />
        <div className={styles['PostDiagnosis-buttonWrapper']}>
          <StyledButton
            wrapperClassName={styles['PostDiagnosis-button']}
            type="submit"
            icon={faCheckCircle}
            className={styles['PostDiagnosis-buttonIcon']}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </form>
  )
}

export default PostDiagnosisFormComponent