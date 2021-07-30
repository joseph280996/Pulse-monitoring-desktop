import React, { MouseEventHandler } from 'react'

export type ExportDataOrDiagnosisPageProps = {
  isMessageOpen: boolean
  setIsMessageOpen: React.Dispatch<React.SetStateAction<boolean>>
  isSubmitting: boolean
  onExportData: MouseEventHandler
  onDiagnose: MouseEventHandler
}
