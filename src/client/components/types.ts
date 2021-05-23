export interface IField {
  type?: string
  name?: string
  disabled?: boolean
  error?: any
  value: string | number | readonly string[] | undefined
  required?: boolean
  className?: string
}
