import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactElement } from 'react';
import StyledButton from 'renderer/client/components/Button';
import LineChart from 'renderer/client/components/Chart/LineChart';
import { PulseTypeSelect } from 'renderer/client/components/Select';
import { TextFieldWithKeyboard } from 'renderer/client/components/TextField';
import './PostDiagnosisForm.scss';
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
        className="PostDiagnosis-field"
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
      <div className="PostDiagnosis-buttonContainer">
        <PulseTypeSelect
          name="pulseTypeID"
          onBlur={() => {
            setFieldTouched('pulseTypeID', true);
          }}
          onChange={(event) => setFieldValue('pulseTypeID', event.target.value)}
          value={values.pulseTypeID}
        />
        <div className="PostDiagnosis-buttonWrapper">
          <StyledButton
            wrapperClassName="PostDiagnosis-button"
            type="submit"
            icon={faCheckCircle}
            className="PostDiagnosis-buttonIcon"
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
}

export default PostDiagnosisFormComponent;
