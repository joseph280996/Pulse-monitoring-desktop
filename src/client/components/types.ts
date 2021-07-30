export interface IField {
  type?: string
  name?: string
  disabled?: boolean
  error?: any
  value?: string | number | readonly string[]
  required?: boolean
  className?: string
}
