import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import './DiagnoseButton.scss'

interface IDiagnoseButtonProps extends IButtonWithIconProps {
  onDiagnose: React.MouseEventHandler
}

function DiagnoseButton({
  onDiagnose,
  className,
}: IDiagnoseButtonProps): React.ReactElement {
  return (
    <StyledButton
      icon={faStethoscope}
      wrapperClassName="DiagnoseButton-wrapper"
      className={classNames('DiagnoseButton', className)}
      onClick={onDiagnose}
    >
      Diagnose
    </StyledButton>
  )
}

export default DiagnoseButton
