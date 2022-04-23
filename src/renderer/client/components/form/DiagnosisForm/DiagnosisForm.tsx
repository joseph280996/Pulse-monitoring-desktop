/* eslint-disable no-nested-ternary */
import { FormikProps } from 'formik';
import { takeRight } from 'lodash';
import { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import { LineSeriesPoint } from 'react-vis';
import DiagnosisFormValuesType, {
  IDiagnosisFormProps,
} from '../../../containers/form/DiagnosisForm/DiagnosisFormTypes';
import {
  ContinueButton,
  RecordButton,
  ResetButton,
  StartButton,
  StopButton,
} from '../../Button';
import LineChart from '../../Chart/LineChart/LineChart';
import Overlay from '../../Overlay';
import { PulsePositionSelect } from '../../Select';
import './DiagnosisForm.scss';

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
        ) : recordedStartIndex ? (
          <StopButton
            className="DiagnosisForm-button"
            iconClassName="Icon Icon-stop"
            buttonTextClassName="DiagnosisForm-buttonTextStop"
            onStop={onStop}
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
