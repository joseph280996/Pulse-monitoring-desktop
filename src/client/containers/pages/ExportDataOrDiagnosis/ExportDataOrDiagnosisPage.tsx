import * as React from 'react'
import { useHistory } from 'react-router-dom'
import ExportDataOrDiagnosisPageComponent from '../../../components/pages/ExportDataOrDiagnosisPage/ExportDataOrDiagnosisPage'

const ExportDataOrDiagnosisPageContainer = (): React.ReactElement => {
  const history = useHistory()
  const onDiagnose = () => {
    history.push('/')
  }
  const onExportData = () => {
    console.log('exported')
  }
  return (
    <ExportDataOrDiagnosisPageComponent
      onExportData={onExportData}
      onDiagnose={onDiagnose}
    />
  )
}

export default ExportDataOrDiagnosisPageContainer
