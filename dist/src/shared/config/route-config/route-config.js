var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = "/",
    _a[AppRoutes.ABOUT] = "/about",
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {})
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}),
    },
    _b);
