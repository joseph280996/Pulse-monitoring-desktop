import { useFormik } from 'formik';
import moment from 'moment';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReceivedDatum } from '../../../common/utils/hooks/useSensorData';
import DiagnosisFormComponent from '../../../components/form/DiagnosisForm/DiagnosisForm';
import FormikValuesType, { IDiagnosisFormProps } from './DiagnosisFormTypes';

export interface IDiagnosisFormContainerProps
  extends Omit<IDiagnosisFormProps, 'data'> {
  data: ReceivedDatum[];
}
function DiagnosisForm({
  data,
  recordedStartTime,
  recordedEndIndex,
  ...passThroughProps
}: IDiagnosisFormContainerProps): ReactElement {
  const navigate = useNavigate();
  const formikProps = useFormik<FormikValuesType>({
    initialValues: {
      pulsePositionID: 0,
    },
    onSubmit: (values: FormikValuesType) => {
      navigate('/postdiagnosis', {
        state: {
          handPositionID: values.pulsePositionID,
        },
      });
    },
  });
  return (
    <DiagnosisFormComponent
      data={data.map((datum: ReceivedDatum) => ({
        x: moment.utc(datum.timeStamp).valueOf(),
        y: datum.data,
      }))}
      recordedEndIndex={recordedEndIndex}
      recordedStartTime={recordedStartTime}
      {...formikProps}
      {...passThroughProps}
    />
  );
}

export default DiagnosisForm;
