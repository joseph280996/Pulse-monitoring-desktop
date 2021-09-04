import * as React from 'react'
import DiagnoseButton from '../../Button/DiagnoseButton'
import ExportDataButton from '../../Button/ExportDataButton'
import styles from './ExportDataOrDiagnosisPage.scss'

const ExportDataOrDiagnosisPageComponent = (): React.ReactElement => {
  return (
    <div className={styles.ExportDataOrDiagnosisPage}>
      <ExportDataButton
        className={styles['ExportDataOrDiagnosisPage-exportDataButton']}
      />
      <DiagnoseButton />
    </div>
  )
}

export default ExportDataOrDiagnosisPageComponent
