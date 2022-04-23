import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { FC, CSSProperties, MouseEventHandler, ReactElement } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './StyledButton.scss';

const ICON_POSSIBLE_POSITION = {
  START: 'start',
  END: 'end',
};

export interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  text?: string;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  isSubmitting?: boolean;
}

export interface IButtonWithIconProps extends IButtonProps {
  primary?: boolean;
  icon?: IconProp;
  iconPosition?: string;
  iconClassName?: string;
  iconWrapperClassName?: string;
  buttonTextClassName?: string;
  onClick?: MouseEventHandler;
  iconStyle?: CSSProperties;
}

const StyledButton: FC<IButtonWithIconProps> = ({
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
  type,
  primary,
  isSubmitting,
}): ReactElement => {
  return (
    <div
      className={classnames(
        'Button-container',
        {
          'Button-iconOnly': !children && !text,
        },
        wrapperClassName
      )}
    >
      <Button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classnames(
          {
            'Button-primary': primary,
          },
          className
        )}
      >
        {icon && iconPosition === ICON_POSSIBLE_POSITION.START && (
          <span className={iconWrapperClassName}>
            <FontAwesomeIcon
              className={iconClassName}
              icon={icon}
              style={iconStyle}
            />
          </span>
        )}
        {(children || text) && (
          <span className={buttonTextClassName}>{children || text}</span>
        )}
        {icon && iconPosition === ICON_POSSIBLE_POSITION.END && (
          <FontAwesomeIcon className={iconClassName} icon={icon} />
        )}
        {isSubmitting && (
          <Spinner
            animation="border"
            role="status"
            className="Button-spinner"
          />
        )}
      </Button>
    </div>
  );
};

StyledButton.defaultProps = {
  type: 'button',
  text: undefined,
  disabled: false,
  className: undefined,
  wrapperClassName: undefined,
  isSubmitting: undefined,
  primary: undefined,
  icon: undefined,
  iconPosition: undefined,
  iconClassName: undefined,
  iconWrapperClassName: undefined,
  buttonTextClassName: undefined,
  onClick: undefined,
  iconStyle: undefined,
};

export default StyledButton;
