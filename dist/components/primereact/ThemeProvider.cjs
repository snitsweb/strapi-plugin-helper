"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const t=require("../../utils/getCurrentTheme.cjs"),i=require("./DarkThemeProvider.cjs"),o=require("./LightThemeProvider.cjs");require("primereact/resources/primereact.min.css");const u=({children:e})=>t.getCurrentTheme()==="dark"?r.jsx(i.DarkThemeProvider,{children:e}):r.jsx(o.LightThemeProvider,{children:e});exports.ThemeProvider=u;
