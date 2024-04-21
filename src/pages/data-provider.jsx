import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeContext, useTheme } from '../contexts/theme';
import { UserContext, useUser } from '../contexts/user';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout';

export const DataProvider = () => {
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
    <Provider store={store}>
      <ThemeContext.Provider value={themeContextValue}>
        <UserContext.Provider value={userContextValue}>
          <Layout>
            <Outlet />
          </Layout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};
