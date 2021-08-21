import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import StyledButton from '../StyledButton'
import styles from './ExportDataButton.scss'
import { ExportDataButtonPropsType } from './ExportDataButtonTypes'

const ExportDataButton = ({
  className,
}: ExportDataButtonPropsType): React.ReactElement => {
  return (
    <Link to="/export-data">
      <StyledButton
        type="button"
        wrapperClassName={styles.ExportDataButton}
        className={classNames('ExportDataButton', className)}
        icon={faFileExport}
      >
        Export Data
      </StyledButton>
    </Link>
  )
}

export default ExportDataButton
