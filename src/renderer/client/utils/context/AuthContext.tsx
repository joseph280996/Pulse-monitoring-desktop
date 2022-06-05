import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
  FC,
} from 'react';
import { ObjectWithStringIndexing } from '../../types';

export interface IBasicAuthType extends ObjectWithStringIndexing {
  username: string;
  password: string;
}
export interface IAuthType extends IBasicAuthType {
  confirmPass?: string;
  isSignedIn: boolean;
}

export type AuthContextValues = {
  auth: IAuthType;
  setAuth?: Dispatch<SetStateAction<IAuthType>>;
};

const AuthContext = createContext<AuthContextValues>({
  auth: {
    username: '',
    password: '',
    isSignedIn: false,
  },
  setAuth: () => {},
});

export const AuthProvider: FC = ({ children }): ReactElement => {
  const [auth, setAuth] = useState<IAuthType>({
    username: 'pulsemonitoring',
    password: 'password',
    isSignedIn: false,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
