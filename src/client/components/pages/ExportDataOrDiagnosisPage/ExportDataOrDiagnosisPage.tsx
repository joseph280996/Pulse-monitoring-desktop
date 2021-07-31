import * as React from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import DiagnoseButton from '../../Button/DiagnoseButton'
import ExportDataButton from '../../Button/ExportDataButton'
import { ExportDataOrDiagnosisPageProps } from './ExportDataOrDiagnosisPageTypes'
import styles from './ExportDataOrDiagnosisPage.scss'
import Overlay from '../../Overlay'
import StyledButton from '../../Button'

const ExportDataOrDiagnosisPageComponent = ({
  onExportData,
  isSubmitting,
  isMessageOpen,
  setIsMessageOpen,
}: ExportDataOrDiagnosisPageProps): React.ReactElement => {
  return (
    <div className={styles.ExportDataOrDiagnosisPage}>
      {isMessageOpen && (
        <Overlay>
          <div
            className={styles['ExportDataOrDiagnosisPage-exportSuccessMessage']}
          >
            <p>Successfully exported data!</p>
            <StyledButton
              onClick={() => {
                setIsMessageOpen(false)
              }}
              className={styles['ExportDataOrDiagnosisPage-closeIcon']}
              icon={faWindowClose}
            />
          </div>
        </Overlay>
      )}
      <ExportDataButton
        isSubmitting={isSubmitting}
        className={styles[`ExportDataOrDiagnosisPage-exportDataButton`]}
        onExport={onExportData}
      />
      <DiagnoseButton />
    </div>
  )
}

export default ExportDataOrDiagnosisPageComponent
