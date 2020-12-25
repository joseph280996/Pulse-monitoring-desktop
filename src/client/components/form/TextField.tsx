import React from 'react'
import { formTypes } from '../../types'

function TextField({
  type,
  name,
  label,
  onChange,
  onBlur,
  value,
  placeholder,
  helperText,
  error = false,
  disabled = false,
  required = false,
}: formTypes.TextFieldProps) {
  return (
    <div className="Form-textFieldContainer">
      <label className="Form-textFieldLabel" htmlFor={name}>
        {`${label}:`}
      </label>
      <input
        className="Form-textField"
        required={required}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className="Form-textFieldHelper">{helperText}</div>}
    </div>
  )
}

export default TextField
