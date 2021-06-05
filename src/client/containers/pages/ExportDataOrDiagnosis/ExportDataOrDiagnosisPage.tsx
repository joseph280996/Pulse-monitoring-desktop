import * as React from 'react'
import { useHistory } from 'react-router-dom'
import tcmAPIRequestController from '../../../common/tcmAPI'
import ExportDataOrDiagnosisPageComponent from '../../../components/pages/ExportDataOrDiagnosisPage/ExportDataOrDiagnosisPage'

const ExportDataOrDiagnosisPageContainer = (): React.ReactElement => {
  const history = useHistory()
  const onDiagnose = () => {
    history.push('/')
  }
  const onExportData = React.useCallback(async () => {
    await tcmAPIRequestController.post('/record', {
      export: true,
    })
  }, [])
  return (
    <ExportDataOrDiagnosisPageComponent
      onExportData={onExportData}
      onDiagnose={onDiagnose}
    />
  )
}

export default ExportDataOrDiagnosisPageContainer
