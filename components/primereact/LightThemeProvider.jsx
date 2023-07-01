import React from 'react';

export const LightThemeProvider = ({ children }) => {
  (() => import('primereact/resources/themes/lara-light-blue/theme.css'))();
  return (
    <div>{ children }</div>
  );
};
