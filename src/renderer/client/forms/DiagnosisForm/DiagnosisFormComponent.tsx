/* eslint-disable no-nested-ternary */
import { FormikProps } from 'formik';
import { takeRight } from 'lodash';
import { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import { LineSeriesPoint } from 'react-vis';
import {
  ContinueButton,
  RecordButton,
  ResetButton,
  StartButton,
  StopButton,
} from 'renderer/client/components/Button';
import LineChart from 'renderer/client/components/Chart/LineChart';
import Overlay from 'renderer/client/components/Overlay';
import { PulsePositionSelect } from 'renderer/client/components/Select';
import './DiagnosisForm.scss';
import DiagnosisFormValuesType, {
  IDiagnosisFormProps,
} from './DiagnosisFormTypes';

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
  recordedStartTime,
  handleChange,
  handleBlur,
  values,
  dirty,
  touched,
}: IDiagnosisFormComponentProps): ReactElement {
  return (
    <Form className="Form" onSubmit={handleSubmit}>
      {isFinished && (
        <Overlay>
          <div className="DiagnosisForm-continueOrResetContainer">
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
      <div className="DiagnosisForm-toolbarContainer">
        <div className="DiagnosisForm-pulseSelectWrapper">
          <PulsePositionSelect
            label="Pulse Position"
            className="DiagnosisForm-pulseSelect"
            value={values.pulsePositionID}
            name="pulsePositionID"
            onPositionChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {!isStarted ? (
          <StartButton
            className="DiagnosisForm-button"
            onStart={onStart}
            disabled={!dirty || !touched}
          />
        ) : recordedStartTime ? (
          <StopButton
            className="DiagnosisForm-button"
            iconClassName="Icon Icon-stop"
            buttonTextClassName="DiagnosisForm-buttonTextStop"
            onStop={onStop(values.pulsePositionID)}
            disabled={!dirty || !touched}
          />
        ) : (
          <RecordButton
            className="DiagnosisForm-button"
            iconClassName="Icon Icon-recording"
            onRecord={onRecord}
            disabled={!dirty || !touched}
            buttonTextClassName="DiagnosisForm-buttonTextRecord"
          />
        )}
      </div>
    </Form>
  );
}

export default DiagnosisForm;
