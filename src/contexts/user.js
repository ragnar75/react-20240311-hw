import { createContext, useCallback, useContext, useState } from 'react';

export const UserContext = createContext(null);

export const useUser = (defaultUser = null) => {
  const [user, setUser] = useState(defaultUser);

  // const login = useCallback((userName) => {
  //   setUser(userName);
  // }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, login: setUser, logout };
};

export const useCurrentUser = () => {
  return useContext(UserContext);
};
