import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import ContextWrapper from './components/ContextWrapper';
import Diagnosis from './pages/diagnosis';
import Finish from './pages/finish';
import PostDiagnosis from './pages/postDiagnosis';
import ExportDataPage from './pages/exportData';
import NotFoundPage from './pages/404';
import LandingPage from './pages/landingPage';
import './App.global.scss';
import PrivateRouteWrapper from './components/Route/PrivateRouteWrapper';
import AuthRoutes from './pages/auth/AuthRoutes';

function BasePage(): ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function App(): ReactElement {
  return (
    <ContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route
              index
              element={<PrivateRouteWrapper element={LandingPage} />}
            />
            <Route
              path="diagnosis"
              element={<PrivateRouteWrapper element={Diagnosis} />}
            />
            <Route
              path="postdiagnosis"
              element={<PrivateRouteWrapper element={PostDiagnosis} />}
            />
            <Route
              path="finish"
              element={<PrivateRouteWrapper element={Finish} />}
            />
            <Route
              path="export-data"
              element={<PrivateRouteWrapper element={ExportDataPage} />}
            />
          </Route>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ContextWrapper>
  );
}
