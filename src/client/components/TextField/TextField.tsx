import classNames from 'classnames'
import * as React from 'react'
import styles from './TextField.scss'
import { ITextFieldProps } from './TextFieldTypes'

function TextField({
  type = 'text',
  name,
  label,
  onClick,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
  disabled = false,
  required = false,
  className,
}: ITextFieldProps): React.ReactElement {
  return (
    <div className={classNames(styles[`TextField-container`], className)}>
      {label && (
        <label className="TextField-label" htmlFor={name}>
          {`${label}:`}
        </label>
      )}
      <input
        className={styles['TextField-input']}
        required={required}
        name={name}
        type={type}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className={styles['TextField-error']}>{error}</div>}
    </div>
  )
}

TextField.defaultProps = {
  onChange: null,
  onBlur: null,
  label: null,
  placeholder: '',
}

export default TextField
