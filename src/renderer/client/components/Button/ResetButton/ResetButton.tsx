import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import StyledButton from '../StyledButton'
import styles from './ResetButton.scss'

type ResetButtonProps = {
  onReset: React.MouseEventHandler
}

const ResetButton = ({ onReset }: ResetButtonProps): React.ReactElement => {
  return (
    <StyledButton
      wrapperClassName={styles['ResetButton-wrapper']}
      className={styles.ResetButton}
      onClick={onReset}
      icon={faRedoAlt}
    />
  )
}

export default ResetButton
