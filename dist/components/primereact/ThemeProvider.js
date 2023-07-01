import { jsx as e } from "react/jsx-runtime";
import "react";
import { getCurrentTheme as m } from "../../utils/getCurrentTheme.js";
import { DarkThemeProvider as o } from "./DarkThemeProvider.js";
import { LightThemeProvider as t } from "./LightThemeProvider.js";
import "primereact/resources/primereact.min.css";
const s = ({ children: r }) => m() === "dark" ? /* @__PURE__ */ e(o, { children: r }) : /* @__PURE__ */ e(t, { children: r });
export {
  s as ThemeProvider
};
