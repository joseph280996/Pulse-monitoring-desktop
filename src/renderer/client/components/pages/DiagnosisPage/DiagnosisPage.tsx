import * as React from 'react';
import DiagnosisForm from '../../../containers/form/DiagnosisForm';
import { IDiagnosisFormContainerProps } from '../../../containers/form/DiagnosisForm/DiagnosisForm';

const DiagnosisPageComponent = ({
  height,
  ...passThroughProps
}: IDiagnosisFormContainerProps): React.ReactElement => {
  return (
    <div style={{ maxHeight: height }}>
      <DiagnosisForm height={height} {...passThroughProps} />
    </div>
  );
};

export default DiagnosisPageComponent;
