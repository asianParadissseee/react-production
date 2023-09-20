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
import cls from './button.module.scss';
import { classNames } from 'shared/lib/class-names/class-names';
export var ThemeButton;
(function (ThemeButton) {
    ThemeButton["CLEAR"] = "clear";
})(ThemeButton || (ThemeButton = {}));
var Button = function (props) {
    var children = props.children, className = props.className, theme = props.theme, otherProps = __rest(props, ["children", "className", "theme"]);
    return (_jsx("button", __assign({}, otherProps, { className: classNames(cls.Button, {}, [className, cls[theme]]), children: children })));
};
export default Button;
