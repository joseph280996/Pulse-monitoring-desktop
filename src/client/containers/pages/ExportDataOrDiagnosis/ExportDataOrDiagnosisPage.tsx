import * as React from 'react'
import { useHistory } from 'react-router-dom'
import tcmAPIRequestController from '../../../common/tcmAPI'
import ExportDataOrDiagnosisPageComponent from '../../../components/pages/ExportDataOrDiagnosisPage/ExportDataOrDiagnosisPage'

const ExportDataOrDiagnosisPageContainer = (): React.ReactElement => {
  const history = useHistory()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isMessageOpen, setIsMessageOpen] = React.useState(false)
  const onDiagnose = () => {
    history.push('/')
  }
  const onExportData = React.useCallback(async () => {
    setIsSubmitting(true)
    try {
      const response = await tcmAPIRequestController.post('/data', {
        export: true,
      })
      if (response.data.successful) {
        setIsMessageOpen(response.data.successful)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }, [])
  return (
    <ExportDataOrDiagnosisPageComponent
      isMessageOpen={isMessageOpen}
      setIsMessageOpen={setIsMessageOpen}
      isSubmitting={isSubmitting}
      onExportData={onExportData}
      onDiagnose={onDiagnose}
    />
  )
}

export default ExportDataOrDiagnosisPageContainer
