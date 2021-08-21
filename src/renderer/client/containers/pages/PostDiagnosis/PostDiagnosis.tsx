import moment from 'moment'
import * as React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { ReceivedDatum } from '../../../common/utils/hooks/useWebSocket'
import useWindowDimensions from '../../../common/utils/hooks/useWindowDimensions'
import PostDiagnosisFormContainer from '../../form/PostDiagnosisForm/PostDiagnosisForm'
import { PostDiagnosisLocationState } from './PostDiagnosisTypes'

function PostDiagnosis(): React.ReactElement {
  const location = useLocation<PostDiagnosisLocationState>()
  const { width, height } = useWindowDimensions(20)
  const recordedData = location?.state?.recordedData?.map(
    (datum: ReceivedDatum) => ({
      x: moment.utc(datum.timeStamp).valueOf(),
      y: datum.data,
    }),
  )
  if (!location.state || !location.state.recordedData)
    return <Redirect to="/" />
  return (
    <div className="PostDiagnosis">
      <PostDiagnosisFormContainer
        width={width}
        height={height - 135}
        data={recordedData}
        initialValues={{
          data: location.state.recordedData,
          pulseTypeID: 1,
          patientName: '',
          handPositionID: Number(location.state.handPositionID),
        }}
      />
    </div>
  )
}

export default PostDiagnosis
