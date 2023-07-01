import { jsx as e } from "react/jsx-runtime";
import { getCurrentTheme as m } from "../../utils/getCurrentTheme.js";
import { DarkThemeProvider as o } from "./DarkThemeProvider.js";
import { LightThemeProvider as t } from "./LightThemeProvider.js";
import "primereact/resources/primereact.min.css";
const n = ({ children: r }) => m() === "dark" ? e(o, { children: r }) : e(t, { children: r });
export {
  n as ThemeProvider
};
