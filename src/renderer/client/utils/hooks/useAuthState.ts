import { useContext } from 'react';
import AuthContext, { AuthContextValues } from '../context/AuthContext';

export default (): AuthContextValues => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('Context hooks must be used within a provider');
  }
  return context;
};
