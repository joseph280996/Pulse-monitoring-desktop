import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import './ExportDataButton.scss'

interface IExportDataButtonProps extends IButtonWithIconProps {
  onExport: React.MouseEventHandler
}

const ExportDataButton = ({
  onExport,
  className,
}: IExportDataButtonProps): React.ReactElement => {
  return (
    <StyledButton
      type="button"
      wrapperClassName="ExportDataButton-wrapper"
      className={classNames('ExportDataButton', className)}
      icon={faFileExport}
      onClick={onExport}
    >
      Export Data
    </StyledButton>
  )
}

export default ExportDataButton
