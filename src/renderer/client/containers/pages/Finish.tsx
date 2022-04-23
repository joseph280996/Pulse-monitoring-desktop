import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../common/utils/hooks/useAuthState';
import FinishComponent from '../../components/pages/Finish';

const Finish: FC = () => {
  const { setAuth } = useAuthState();
  const navigate = useNavigate();
  const onEndClick = () => {
    if (setAuth) setAuth((auth) => ({ ...auth, isSignedIn: false }));
    navigate('/');
  };
  return <FinishComponent onEndClick={onEndClick} />;
};

export default Finish;
