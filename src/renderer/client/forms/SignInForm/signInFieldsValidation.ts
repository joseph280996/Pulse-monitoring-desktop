import { string } from 'yup';
import { FieldConfig } from '../../components/types';
import { TextFieldWithKeyboard } from '../../components/TextField';

const signInFields: FieldConfig[] = [
  {
    FieldComponent: TextFieldWithKeyboard,
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    required: true,
    validate: string().required('Required'),
  },
  {
    FieldComponent: TextFieldWithKeyboard,
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    required: true,
    validate: string().required('Required'),
  },
];

export default signInFields;
