import { jsx as _jsx } from "react/jsx-runtime";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/theme-provider";
import "shared/config/i18n/i18n";
import { render } from "react-dom";
render(_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }), document.getElementById("root"));
