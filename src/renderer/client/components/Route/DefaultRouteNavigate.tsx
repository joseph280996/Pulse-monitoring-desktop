import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const DefaultRouteNavigate: FC<{ path: string }> = ({ path }) => {
  return <Navigate to={path} />;
};

export default DefaultRouteNavigate;
