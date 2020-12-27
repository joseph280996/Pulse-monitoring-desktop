import TextField from '../../components/form/TextField'
import { FieldConfig } from '../../../types/form'

const signInFields: FieldConfig[] = [
  {
    FieldComponent: TextField,
    label: 'Username',
    type: 'text',
    name: 'username',
    placeholder: 'Username',
  },
  {
    FieldComponent: TextField,
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
]

export default signInFields
