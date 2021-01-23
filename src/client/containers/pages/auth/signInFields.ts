import { string } from 'yup'
import TextField from '../../../components/form/TextField'
import { FormTypes } from '../../../../common/types'

const signInFields: FormTypes.FieldConfig[] = [
  {
    FieldComponent: TextField,
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    required: true,
    validate: string().required('Required'),
  },
  {
    FieldComponent: TextField,
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    required: true,
    validate: string().required('Required'),
  },
]

export default signInFields
