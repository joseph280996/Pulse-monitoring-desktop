import TextField from '../../components/form/TextField'
import { TextFieldProps } from '../../types/form'

interface FieldConfig extends TextFieldProps {
  FieldComponent?: (param: TextFieldProps) => JSX.Element
}

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
