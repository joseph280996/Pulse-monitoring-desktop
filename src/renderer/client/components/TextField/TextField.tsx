import classNames from 'classnames';
import { ReactElement } from 'react';
import './TextField.scss';
import { ITextFieldProps } from './TextFieldTypes';

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
}: ITextFieldProps): ReactElement {
  return (
    <div className={classNames('TextField-container', className)}>
      {label && (
        <label className="TextField-label" htmlFor={name}>
          {`${label}:`}
        </label>
      )}
      <input
        className={classNames('TextField-input', {
          'TextField-input--error': !!error,
        })}
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
      {error && <div className="TextField-error">{error}</div>}
    </div>
  );
}

TextField.defaultProps = {
  onChange: null,
  onBlur: null,
  label: null,
  placeholder: '',
};

export default TextField;
