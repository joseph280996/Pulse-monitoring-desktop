import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../utils/hooks/useAuthState';
import FinishComponent from './FinishComponent';

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
