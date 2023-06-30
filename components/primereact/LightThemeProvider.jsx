export const LightThemeProvider = ({ children }) => {
  (() => import('primereact/resources/themes/lara-light-blue/theme.css'))();
  return { children };
};
