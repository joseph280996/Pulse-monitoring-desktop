import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import * as React from 'react'
import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import styles from './StyledButton.scss'

const ICON_POSSIBLE_POSITION = {
  START: 'start',
  END: 'end',
}

export interface IButtonProps {
  type?: string
  text?: string
  disabled?: boolean
  className?: string
  wrapperClassName?: string
  isSubmitting?: boolean
}

export interface IButtonWithIconProps extends IButtonProps {
  primary?: boolean
  icon?: IconProp
  iconPosition?: string
  iconClassName?: string
  iconWrapperClassName?: string
  buttonTextClassName?: string
  onClick?: MouseEventHandler
  iconStyle?: CSSProperties
}

const StyledButton = ({
  icon,
  iconPosition = ICON_POSSIBLE_POSITION.START,
  iconClassName,
  iconWrapperClassName,
  iconStyle,
  onClick,
  text,
  children,
  className,
  wrapperClassName,
  buttonTextClassName,
  disabled,
  type = 'button',
  primary,
  isSubmitting,
}: PropsWithChildren<IButtonWithIconProps>): React.ReactElement => {
  const IconComponent = () =>
    isSubmitting ? (
      <Spinner animation="border" role="status" className="Button-spinner" />
    ) : (
      <FontAwesomeIcon
        className={iconClassName}
        icon={icon}
        style={iconStyle}
      />
    )
  return (
    <div
      className={classnames(
        styles['Button-container'],
        {
          [styles['Button-iconOnly']]: !children && !text,
        },
        wrapperClassName,
      )}
    >
      <Button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classnames(
          {
            [styles['Button-primary']]: primary,
          },
          className,
        )}
      >
        {icon && iconPosition === ICON_POSSIBLE_POSITION.START && (
          <span className={iconWrapperClassName}>
            <IconComponent />
          </span>
        )}
        {(children || text) && (
          <span className={buttonTextClassName}>{children || text}</span>
        )}
        {icon && iconPosition === ICON_POSSIBLE_POSITION.END && (
          <IconComponent />
        )}
      </Button>
    </div>
  )
}

export default StyledButton
