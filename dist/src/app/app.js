import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';
import './styles/index.scss';
var App = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx("div", { className: classNames('app', {}, [theme]), children: _jsxs(Suspense, { fallback: "", children: [_jsx(Navbar, {}), _jsxs("div", { className: "content-page", children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] })] }) }));
};
export default App;
