import { string } from 'yup'
import { TextFieldWithKeyboard } from '../../../components/TextField'
import { FieldConfig } from './SignInTypes'

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
]

export default signInFields
