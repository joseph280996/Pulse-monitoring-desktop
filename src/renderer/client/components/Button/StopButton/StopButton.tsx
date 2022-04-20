import { faStop } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import React from 'react';
import StyledButton, { IButtonWithIconProps } from '../StyledButton';
import './StopButton.scss';

interface IStopButtonProps extends IButtonWithIconProps {
  onStop: React.MouseEventHandler;
}
const StopButton = ({
  className,
  iconClassName,
  buttonTextClassName,
  onStop,
  disabled,
}: IStopButtonProps): React.ReactElement => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onStop}
      icon={faStop}
      className={classNames('StopButton', className)}
      iconClassName={iconClassName}
      buttonTextClassName={buttonTextClassName}
    />
  );
};

export default StopButton;
