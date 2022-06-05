import { ReactElement } from 'react';
import DiagnosisForm from '../../forms/DiagnosisForm';
import { IDiagnosisFormContainerProps } from '../../forms/DiagnosisForm/DiagnosisForm';

const DiagnosisPageComponent = ({
  height,
  ...passThroughProps
}: IDiagnosisFormContainerProps): ReactElement => {
  return (
    <div style={{ maxHeight: height }}>
      <DiagnosisForm height={height} {...passThroughProps} />
    </div>
  );
};

export default DiagnosisPageComponent;
