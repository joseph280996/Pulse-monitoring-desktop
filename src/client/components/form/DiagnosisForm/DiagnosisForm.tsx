/* eslint-disable no-nested-ternary */
import { FormikProps } from 'formik'
import { takeRight } from 'lodash'
import * as React from 'react'
import { Form } from 'react-bootstrap'
import { LineSeriesPoint } from 'react-vis'
import DiagnosisFormValuesType, {
  IDiagnosisFormProps,
} from '../../../containers/form/DiagnosisForm/DiagnosisFormTypes'
import {
  ContinueButton,
  RecordButton,
  ResetButton,
  StartButton,
  StopButton,
} from '../../Button'
import LineChart from '../../Chart/LineChart/LineChart'
import Overlay from '../../Overlay'
import { PulsePositionSelect } from '../../Select'
import styles from './DiagnosisForm.scss'

interface IDiagnosisFormComponentProps
  extends IDiagnosisFormProps,
    FormikProps<DiagnosisFormValuesType> {}

function DiagnosisForm({
  isFinished,
  data,
  width,
  height,
  isStarted,
  onStart,
  onRecord,
  onStop,
  onReset,
  handleSubmit,
  recordedStartIndex,
  handleChange,
  handleBlur,
  values,
  dirty,
  touched,
}: IDiagnosisFormComponentProps): React.ReactElement {
  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      {isFinished && (
        <Overlay>
          <div className={styles['DiagnosisForm-continueOrResetContainer']}>
            <ResetButton onReset={onReset} />
            <ContinueButton type="submit" />
          </div>
        </Overlay>
      )}
      <div>
        <LineChart
          data={takeRight<LineSeriesPoint>(data, 200)}
          width={width}
          height={height - 100}
        />
      </div>
      <div className={styles[`DiagnosisForm-toolbarContainer`]}>
        <div className={styles[`DiagnosisForm-pulseSelectWrapper`]}>
          <PulsePositionSelect
            label="Pulse Position"
            className={styles[`DiagnosisForm-pulseSelect`]}
            value={values.pulsePositionID}
            name="pulsePositionID"
            onPositionChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {!isStarted ? (
          <StartButton
            className={styles[`DiagnosisForm-button`]}
            onStart={onStart}
          />
        ) : recordedStartIndex ? (
          <StopButton
            className={styles[`DiagnosisForm-button`]}
            iconClassName="Icon Icon-stop"
            buttonTextClassName={styles[`DiagnosisForm-buttonTextStop`]}
            onStop={onStop}
            disabled={!dirty || !touched}
          />
        ) : (
          <RecordButton
            className={styles[`DiagnosisForm-button`]}
            iconClassName="Icon Icon-recording"
            onRecord={onRecord}
            disabled={!dirty || !touched}
            buttonTextClassName="DiagnosisForm-buttonTextRecord"
          />
        )}
      </div>
    </Form>
  )
}

export default DiagnosisForm
