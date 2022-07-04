import { ReactElement, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useRecord from 'renderer/client/utils/hooks/useRecord';
import useWindowDimensions from 'renderer/client/utils/hooks/useWindowDimensions';
import recordDataToLineChartDataMapper from 'renderer/client/utils/mapper/recordDataToLineChartDataMapper';
import LoadingSpinner from 'renderer/client/components/LoadingSpinner';
import PostDiagnosisFormContainer from 'renderer/client/forms/PostDiagnosisForm';
import { PostDiagnosisLocationState } from './PostDiagnosisTypes';

function PostDiagnosis(): ReactElement {
  const location = useLocation();
  const { width, height } = useWindowDimensions(20);
  const locationState: PostDiagnosisLocationState =
    location?.state as PostDiagnosisLocationState;
  const { recordID } = location.state as PostDiagnosisLocationState;
  const { record, isLoading: isRecordLoading } = useRecord(recordID);

  const recordedDataToDisplay = useMemo(
    () => recordDataToLineChartDataMapper(record?.data),
    [record?.data]
  );

  if (!locationState || !locationState.recordID) {
    return <Navigate to="/" replace />;
  }
  if (isRecordLoading || !record || !record.data) {
    return <LoadingSpinner />;
  }
  return (
    <div className="PostDiagnosis">
      <PostDiagnosisFormContainer
        width={width}
        height={height - 135}
        data={recordedDataToDisplay}
        initialValues={{
          recordID,
          pulseTypeID: 1,
          patientName: '',
        }}
      />
    </div>
  );
}

export default PostDiagnosis;
