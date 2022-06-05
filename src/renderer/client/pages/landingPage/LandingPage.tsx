import { ReactElement } from 'react';
import DiagnoseButton from '../../components/Button/DiagnoseButton';
import ExportDataButton from '../../components/Button/ExportDataButton';
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
