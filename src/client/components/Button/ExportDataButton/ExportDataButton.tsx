import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import StyledButton, { IButtonWithIconProps } from '../StyledButton'
import styles from './ExportDataButton.scss'

interface IExportDataButtonProps extends IButtonWithIconProps {
  onExport: React.MouseEventHandler
  isSubmitting: boolean
}

const ExportDataButton = ({
  onExport,
  className,
  isSubmitting,
}: IExportDataButtonProps): React.ReactElement => {
  return (
    <StyledButton
      isSubmitting={isSubmitting}
      type="button"
      wrapperClassName={styles.ExportDataButton}
      className={classNames('ExportDataButton', className)}
      icon={faFileExport}
      onClick={onExport}
    >
      Export Data
    </StyledButton>
  )
}

export default ExportDataButton
