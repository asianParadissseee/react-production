import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route-config/route-config";
var AppRouter = function () {
    return (_jsx(Routes, { children: Object.values(routeConfig).map(function (_a) {
            var element = _a.element, path = _a.path;
            return (_jsx(Route, { path: path, element: (_jsx(Suspense, { fallback: _jsx("div", { children: "...loading" }), children: _jsx("div", { className: "page-wrapper", children: element }) })) }, path));
        }) }));
};
export default AppRouter;
