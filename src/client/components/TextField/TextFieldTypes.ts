import { IField } from '../types'

export interface ITextFieldProps extends IField {
  onClick?: React.MouseEventHandler
  onChange?: React.ChangeEventHandler
  onBlur?: React.FocusEventHandler
  placeholder?: string
  label?: string
}
