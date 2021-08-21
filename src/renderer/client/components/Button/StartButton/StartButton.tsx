import { faPlay } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import styles from './StartButton.scss'

interface IStartButtonProps extends IButtonWithIconProps {
  onStart: React.MouseEventHandler
}

const StartButton = ({
  onStart,
  className,
  ...buttonProps
}: IStartButtonProps): React.ReactElement => {
  return (
    <StyledButton
      icon={faPlay}
      wrapperClassName={styles['StartButton-wrapper']}
      className={classNames(styles.StartButton, className)}
      onClick={onStart}
      {...buttonProps}
    />
  )
}

export default StartButton
