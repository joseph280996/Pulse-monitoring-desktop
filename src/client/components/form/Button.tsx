import React, { PropsWithChildren } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormTypes } from '../../../common/types'

export function SubmitButton({
  text,
  className,
  wrapperClassName,
  disabled,
  children,
  isSubmitting,
}: PropsWithChildren<FormTypes.ButtonProps>) {
  return (
    <div className={classnames('SubmitButton-container', wrapperClassName)}>
      <Button
        className={classnames('Button', className)}
        type="submit"
        disabled={disabled}
      >
        {children || text}
        {isSubmitting && (
          <Spinner
            animation="border"
            role="status"
            className="Button-spinner"
          />
        )}
      </Button>
    </div>
  )
}

const iconPossiblePosition = {
  START: 'start',
  END: 'end',
}

export const ButtonWithIcon = ({
  icon,
  iconPosition = iconPossiblePosition.START,
  iconClassName,
  iconWrapperClassName,
  iconStyle,
  onClick,
  text,
  children,
  className,
  wrapperClassName,
  buttonTextClassName,
  disabled = false,
}: PropsWithChildren<FormTypes.ButtonWithIconProps>) => {
  return (
    <div className={wrapperClassName}>
      <Button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        <span className={iconWrapperClassName}>
          {iconPosition === iconPossiblePosition.START && (
            <FontAwesomeIcon
              className={iconClassName}
              icon={icon}
              style={iconStyle}
            />
          )}
          {(children || text) && (
            <span className={buttonTextClassName}>{children || text}</span>
          )}
          {iconPosition === iconPossiblePosition.END && (
            <FontAwesomeIcon className={iconClassName} icon={icon} />
          )}
        </span>
      </Button>
    </div>
  )
}

export default Button
