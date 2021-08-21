import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import styles from './DiagnoseButton.scss'

type IDiagnoseButtonProps = IButtonWithIconProps

function DiagnoseButton({
  className,
}: IDiagnoseButtonProps): React.ReactElement {
  return (
    <Link to="/" className={styles['DiagnoseButton-link']}>
      <StyledButton
        icon={faStethoscope}
        wrapperClassName={styles.DiagnoseButton}
        className={classNames('DiagnoseButton', className)}
      >
        Diagnose
      </StyledButton>
    </Link>
  )
}

export default DiagnoseButton
