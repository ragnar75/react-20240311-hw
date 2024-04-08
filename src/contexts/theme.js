import { createContext, useCallback, useContext, useState } from 'react';

export const ThemeContext = createContext('default');

export const useTheme = (defaultTheme = 'default') => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === 'default' ? 'alternate' : 'default'
    );
  }, []);

  return { theme, toggleTheme };
};

export const useCurrentTheme = () => {
  return useContext(ThemeContext);
};
