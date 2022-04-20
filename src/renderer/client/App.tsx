import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextWrapper from './components/ContextWrapper';
import AuthPage from './containers/pages/auth/AuthPage';
import ExportDataOrDiagnosisPage from './components/pages/ExportDataOrDiagnosisPage';
import Diagnosis from './containers/pages/Diagnosis';
import Finish from './containers/pages/Finish';
import PostDiagnosis from './containers/pages/PostDiagnosis';
import ExportDataPage from './containers/pages/ExportData';
import NotFoundPage from './components/pages/NotFound';

export default function App(): React.ReactElement {
  return (
    <ContextWrapper>
      <Router>
        <Routes>
          <Route path="/auth" element={AuthPage} />
          <Route path="/export" element={ExportDataOrDiagnosisPage} />
          <Route path="/" element={Diagnosis} />
          <Route path="/postdiagnosis" element={PostDiagnosis} />
          <Route path="/finish" element={Finish} />

          <Route path="/export-data" element={ExportDataPage} />
          <Route path="*" element={NotFoundPage} />
        </Routes>
      </Router>
    </ContextWrapper>
  );
}
