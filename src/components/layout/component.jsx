import { useMemo } from 'react';
import { Header } from '../header/component';
import { Footer } from '../footer/component';

import { ThemeContext, useTheme } from '../../contexts/theme';
import { UserContext, useUser } from '../../contexts/user';

import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
