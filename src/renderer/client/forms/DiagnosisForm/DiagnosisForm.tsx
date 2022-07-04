import { useFormik } from 'formik';
import moment from 'moment';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReceivedDatum } from 'renderer/client/types';
import DiagnosisFormComponent from './DiagnosisFormComponent';
import FormikValuesType, { IDiagnosisFormProps } from './DiagnosisFormTypes';

export interface IDiagnosisFormContainerProps
  extends Omit<IDiagnosisFormProps, 'data'> {
  data: ReceivedDatum[];
}

function DiagnosisForm({
  data,
  recordID,
  ...passThroughProps
}: IDiagnosisFormContainerProps): ReactElement {
  const navigate = useNavigate();
  const formikProps = useFormik<FormikValuesType>({
    initialValues: {
      pulsePositionID: 0,
      recordID: recordID ?? 0,
    },
    onSubmit: (values: FormikValuesType) => {
      navigate('/postdiagnosis', {
        state: {
          recordID: values.recordID,
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
      {...formikProps}
      {...passThroughProps}
    />
  );
}

export default DiagnosisForm;
