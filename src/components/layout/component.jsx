import { useState } from 'react';
import { HeaderContext } from '../../contexts/header';
import { Header } from '../header/component';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  const [header, setHeader] = useState({
    status: 'unauthorized',
    theme: 'default',
  });

  // Is there any easier method to toggle between string values of an object using setState(), than my implementation?

  return (
    <div>
      <HeaderContext.Provider value={header}>
        <Header>
          <div>
            <button
              className={styles.btnHeader}
              onClick={() =>
                setHeader((prevState) => ({
                  ...prevState,
                  theme:
                    header.theme === 'default'
                      ? 'alternate'
                      : header.theme === 'alternate'
                      ? 'default'
                      : 'alternate',
                }))
              }
            >
              Toggle Theme
            </button>
          </div>
          <div>
            <span className={styles.authHeader}>
              {header.status === 'authorized' ? 'John Doe' : 'User'}
            </span>
            <button
              className={styles.btnHeader}
              onClick={() =>
                setHeader((prevState) => ({
                  ...prevState,
                  status:
                    header.status === 'unauthorized'
                      ? 'authorized'
                      : header.status === 'authorized'
                      ? 'unauthorized'
                      : 'authorized',
                }))
              }
            >
              {header.status === 'authorized' ? 'Logout' : 'Login'}
            </button>
          </div>
        </Header>
        {children}
      </HeaderContext.Provider>
      <footer>footer</footer>
    </div>
  );
};
