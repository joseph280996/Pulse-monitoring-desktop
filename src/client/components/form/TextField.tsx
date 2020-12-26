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
    <div className="TextField-container">
      <label className="TextField-label" htmlFor={name}>
        {`${label}:`}
      </label>
      <input
        className="TextField-input"
        required={required}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className="TextField-helper">{helperText}</div>}
    </div>
  )
}

export default TextField
