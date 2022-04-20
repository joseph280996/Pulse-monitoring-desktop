import { FieldConfig } from 'renderer/client/components/types';
import { array, number, object, string } from 'yup';

const postDiagnosisFormFields: FieldConfig[] = [
  {
    type: 'text',
    name: 'patientName',
    placeholder: 'Patient Name',
    validate: string().required('Required'),
  },
  {
    name: 'data',
    validate: array()
      .of(
        object().shape({
          x: number(),
          y: number(),
        })
      )
      .required('Required'),
  },
  {
    name: 'pulseTypeID',
    validate: number().required('Required'),
  },
  {
    name: 'handPositionID',
    validate: number().required('Required'),
  },
];
export default postDiagnosisFormFields;
