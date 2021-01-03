import TextField from '../../components/form/TextField'
import { FieldConfig } from '../../../types/form'

const signInFields: FieldConfig[] = [
  {
    FieldComponent: TextField,
    type: 'text',
    name: 'username',
    placeholder: 'Username',
  },
  {
    FieldComponent: TextField,
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
]

export default signInFields
