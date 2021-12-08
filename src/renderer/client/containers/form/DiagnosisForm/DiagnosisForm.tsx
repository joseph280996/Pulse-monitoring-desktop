import { useFormik } from 'formik'
import moment from 'moment'
import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { ReceivedDatum } from '../../../common/utils/hooks/useWebSocket'
import DiagnosisFormComponent from '../../../components/form/DiagnosisForm/DiagnosisForm'
import FormikValuesType, { IDiagnosisFormProps } from './DiagnosisFormTypes'

export interface IDiagnosisFormContainerProps
  extends Omit<IDiagnosisFormProps, 'data'> {
  data: ReceivedDatum[]
}
function DiagnosisForm({
  data,
  recordedStartIndex,
  recordedEndIndex,
  ...passThroughProps
}: IDiagnosisFormContainerProps): React.ReactElement {
  const history = useHistory()
  const formikProps = useFormik<FormikValuesType>({
    initialValues: {
      pulsePositionID: 0,
    },
    onSubmit: (values: FormikValuesType) => {
      const recordedData = data.slice(recordedStartIndex, recordedEndIndex)
      history.push('/postdiagnosis', {
        recordedData,
        handPositionID: values.pulsePositionID,
      })
    },
  })
  const mappedData = React.useMemo(
    () =>
      data.map((datum: ReceivedDatum) => ({
        x: moment.utc(datum.timeStamp).valueOf(),
        y: datum.data,
      })),
    [data],
  )
  return (
    <DiagnosisFormComponent
      data={mappedData}
      recordedEndIndex={recordedEndIndex}
      recordedStartIndex={recordedStartIndex}
      {...formikProps}
      {...passThroughProps}
    />
  )
}

export default DiagnosisForm
