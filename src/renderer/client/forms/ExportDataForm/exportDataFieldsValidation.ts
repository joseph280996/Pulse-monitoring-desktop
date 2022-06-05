import { FieldConfig } from 'renderer/client/components/types';
import { string } from 'yup';

const exportDataFields: FieldConfig[] = [
  {
    name: 'startDate',
    validate: string().required('Required'),
  },
  {
    name: 'endDate',
    validate: string().required('Required'),
  },
];
export default exportDataFields;
