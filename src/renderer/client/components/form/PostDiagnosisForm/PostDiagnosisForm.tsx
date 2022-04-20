import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement } from 'react';
import StyledButton from '../../Button';
import LineChart from '../../Chart/LineChart';
import { PulseTypeSelect } from '../../Select';
import { TextFieldWithKeyboard } from '../../TextField';
import styles from './PostDiagnosisForm.scss';
import { IPostDiagnosisProps } from './PostDiagnosisFormTypes';

function PostDiagnosisFormComponent({
  data,
  width,
  height,
  handleSubmit,
  handleBlur,
  errors,
  setFieldTouched,
  setFieldValue,
  values,
  isSubmitting,
  status,
}: IPostDiagnosisProps): ReactElement {
  return (
    <form onSubmit={handleSubmit}>
      {status && <div>{status}</div>}
      <TextFieldWithKeyboard
        className={styles['PostDiagnosis-field']}
        type="text"
        placeholder="Patient Name"
        onChange={(input) => {
          setFieldValue('patientName', input);
        }}
        error={errors.patientName}
        name="patientName"
        onBlur={handleBlur}
        value={values.patientName}
        required
      />
      <LineChart data={data} width={width} height={height} />
      <div className={styles['PostDiagnosis-buttonContainer']}>
        <PulseTypeSelect
          name="pulseTypeID"
          onBlur={() => {
            setFieldTouched('pulseTypeID', true);
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
  );
}

export default PostDiagnosisFormComponent;
