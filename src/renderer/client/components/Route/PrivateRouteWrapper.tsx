import { ReactElement, FC } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthState from 'renderer/client/common/utils/hooks/useAuthState';

const PrivateRouteWrapper = ({
  element: Element,
}: {
  element: FC;
}): ReactElement => {
  const {
    auth: { isSignedIn },
  } = useAuthState();
  if (!isSignedIn) {
    return <Navigate to="/auth" />;
  }
  return <Element />;
};

export default PrivateRouteWrapper;
