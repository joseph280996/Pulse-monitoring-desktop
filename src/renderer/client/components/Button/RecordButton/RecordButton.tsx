import { faCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import React from 'react'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import styles from './RecordButton.scss'

interface IRecordButtonProps extends IButtonWithIconProps {
  onRecord: React.MouseEventHandler
}

const RecordButton = ({
  onRecord,
  disabled,
  iconClassName,
  buttonTextClassName,
  className,
}: IRecordButtonProps): React.ReactElement => {
  return (
    <StyledButton
      iconClassName={iconClassName}
      className={classNames(styles.RecordButton, className)}
      buttonTextClassName={buttonTextClassName}
      disabled={disabled}
      onClick={onRecord}
      icon={faCircle}
    />
  )
}

export default RecordButton
