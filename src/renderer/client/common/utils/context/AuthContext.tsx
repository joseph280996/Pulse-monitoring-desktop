import * as React from 'react';

export interface IBasicAuthType {
  username: string;
  password: string;
}
export interface IAuthType extends IBasicAuthType {
  confirmPass?: string;
  isSignedIn: boolean;
}

export type AuthContextValues = {
  auth: IAuthType;
  setAuth?: React.Dispatch<React.SetStateAction<IAuthType>>;
};

const AuthContext = React.createContext<AuthContextValues>({
  auth: {
    username: '',
    password: '',
    isSignedIn: false,
  },
});

export const AuthProvider = ({
  children,
}: React.PropsWithChildren<any>): React.ReactElement => {
  const [auth, setAuth] = React.useState<IAuthType>({
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
