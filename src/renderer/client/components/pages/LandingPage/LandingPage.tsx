import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthState from 'renderer/client/common/utils/hooks/useAuthState';
import DiagnoseButton from '../../Button/DiagnoseButton';
import ExportDataButton from '../../Button/ExportDataButton';
import './LandingPage.scss';

const LandingPage = (): ReactElement => {
  return (
    <div className="ExportDataOrDiagnosisPage">
      <ExportDataButton className="ExportDataOrDiagnosisPage-exportDataButton" />
      <DiagnoseButton />
    </div>
  );
};

export default LandingPage;
