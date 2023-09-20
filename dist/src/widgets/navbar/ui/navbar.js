import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "shared/lib/class-names/class-names";
import cls from "./navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/app-link/ui/app-link";
var Navbar = function (_a) {
    var className = _a.className;
    return (_jsx("header", { className: classNames(cls.navbar, {}, []), children: _jsxs("div", { className: cls.links, children: [_jsx(AppLink, { theme: AppLinkTheme.SECONDARY, to: "/about", children: "About" }), _jsx(AppLink, { theme: AppLinkTheme.SECONDARY, to: "/", children: "Home" })] }) }));
};
export default Navbar;
