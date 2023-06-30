import React from 'react';

export const DarkThemeProvider = ({ children }) => {
  (() => import('primereact/resources/themes/vela-blue/theme.css'))();
  return (<div>{ children }</div>);
};
