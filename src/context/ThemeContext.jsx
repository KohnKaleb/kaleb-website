import React, { createContext, useState, useContext, useMemo } from 'react';
import sky from '../images/sky.png';
import space from '../images/space.jpeg';
import moon from '../images/moon.png';
import sun from '../images/sun.png';
import f22 from '../images/f22.png';
import orion from '../images/orion.png';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = useMemo(() => ({
    light: {
      mode: 'light',
      textColor: 'black',
      background: sky,
      icon: moon,
      aircraft: f22,
      linkColor: 'white',
    },
    dark: {
      mode: 'dark',
      textColor: '#DEE2E6',
      background: space,
      icon: sun,
      aircraft: orion,
      linkColor: 'rgb(110,168,254)',
    },
  }), []);

  const currentTheme = themeConfig[theme];

  const value = useMemo(
    () => ({
      theme,
      currentTheme,
      toggleTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light',
    }),
    [theme, currentTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
