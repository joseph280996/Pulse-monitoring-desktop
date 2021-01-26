import React from 'react'
import { FormTypes } from '../../../common/types'

function TextField({
  type,
  name,
  label,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
  disabled = false,
  required = false,
  className,
}: FormTypes.TextFieldProps) {
  console.log(error)
  return (
    <div className={`TextField-container ${className}`}>
      {label && (
        <label className="TextField-label" htmlFor={name}>
          {`${label}:`}
        </label>
      )}
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
      {error && <div className="TextField-error">{error}</div>}
    </div>
  )
}

export default TextField
