var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import cls from "./app-link.module.scss";
import { classNames } from "shared/lib/class-names/class-names";
export var AppLinkTheme;
(function (AppLinkTheme) {
    AppLinkTheme["PRIMARY"] = "primary";
    AppLinkTheme["SECONDARY"] = "secondary";
})(AppLinkTheme || (AppLinkTheme = {}));
var AppLink = function (props) {
    var className = props.className, children = props.children, _a = props.theme, theme = _a === void 0 ? AppLinkTheme.PRIMARY : _a, otherProps = __rest(props, ["className", "children", "theme"]);
    return (_jsx(Link, __assign({}, otherProps, { className: classNames(cls.AppLink, {}, [className, cls[theme]]), children: children })));
};
export default AppLink;
