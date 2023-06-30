export const DarkThemeProvider = ({ children }) => {
  (() => import('primereact/resources/themes/vela-blue/theme.css'))();
  return { children };
};
