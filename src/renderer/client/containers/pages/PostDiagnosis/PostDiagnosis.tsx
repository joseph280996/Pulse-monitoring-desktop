import moment from 'moment';
import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReceivedDatum } from '../../../common/utils/hooks/useSensorData';
import useWindowDimensions from '../../../common/utils/hooks/useWindowDimensions';
import PostDiagnosisFormContainer from '../../form/PostDiagnosisForm/PostDiagnosisForm';
import { PostDiagnosisLocationState } from './PostDiagnosisTypes';

function PostDiagnosis(): ReactElement {
  const location = useLocation();
  const { width, height } = useWindowDimensions(20);
  const locationState: PostDiagnosisLocationState =
    location?.state as PostDiagnosisLocationState;
  const recordedData = locationState.recordedData?.map(
    (datum: ReceivedDatum) => ({
      x: moment.utc(datum.timeStamp).valueOf(),
      y: datum.data,
    })
  );
  if (!locationState || !locationState.recordedData)
    return <Navigate to="/" replace />;
  return (
    <div className="PostDiagnosis">
      <PostDiagnosisFormContainer
        width={width}
        height={height - 135}
        data={recordedData}
        initialValues={{
          data: locationState.recordedData,
          pulseTypeID: 1,
          patientName: '',
          handPositionID: Number(locationState.handPositionID),
        }}
      />
    </div>
  );
}

export default PostDiagnosis;
