import * as React from 'react'
import DiagnoseButton from '../../Button/DiagnoseButton'
import ExportDataButton from '../../Button/ExportDataButton'
import { ExportDataOrDiagnosisPageProps } from './ExportDataOrDiagnosisPageTypes'
import styles from './ExportDataOrDiagnosisPage.scss'

const ExportDataOrDiagnosisPageComponent = ({
  onDiagnose,
  onExportData,
}: ExportDataOrDiagnosisPageProps): React.ReactElement => {
  return (
    <div className={styles.ExportDataOrDiagnosisPage}>
      <ExportDataButton
        className={styles[`ExportDataOrDiagnosisPage-exportDataButton`]}
        onExport={onExportData}
      />
      <DiagnoseButton
        className={styles[`ExportDataOrDiagnosisPage-diagnoseButton`]}
        onDiagnose={onDiagnose}
      />
    </div>
  )
}

export default ExportDataOrDiagnosisPageComponent
