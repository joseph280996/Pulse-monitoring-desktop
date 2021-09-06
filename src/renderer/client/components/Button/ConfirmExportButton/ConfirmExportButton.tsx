import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import styles from './ConfirmExportButton.scss'
import StyledButton, { IButtonProps } from '../StyledButton'

const ContinueButton = ({
  type = 'button',
}: IButtonProps): React.ReactElement => {
  return (
    <StyledButton
      buttonTextClassName={styles['ContinueButton-text']}
      wrapperClassName={styles['ContinueButton-wrapper']}
      className={styles.ContinueButton}
      iconPosition="end"
      icon={faArrowRight}
      type={type}
    >
      Export Data
    </StyledButton>
  )
}

export default ContinueButton
