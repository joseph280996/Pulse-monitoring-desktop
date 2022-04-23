import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
  FC,
} from 'react';

export interface IBasicAuthType {
  username: string;
  password: string;
  [key: string]: any;
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
