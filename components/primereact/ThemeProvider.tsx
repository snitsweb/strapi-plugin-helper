import React from 'react';
import { getCurrentTheme } from '../../utils/getCurrentTheme';
import { DarkThemeProvider } from './DarkThemeProvider';
import { LightThemeProvider } from './LightThemeProvider';
import 'primereact/resources/primereact.min.css';

export const ThemeProvider = ({ children }) => {
  const theme = getCurrentTheme();

  return (
    theme === 'dark'
      ? <DarkThemeProvider>{children}</DarkThemeProvider>
      : <LightThemeProvider>{children}</LightThemeProvider>
  );
};
