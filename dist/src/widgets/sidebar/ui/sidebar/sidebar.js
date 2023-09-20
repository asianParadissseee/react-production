import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from "shared/lib/class-names/class-names";
import cls from "./sidebar.module.scss";
import Button from "shared/ui/button/ui/button";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/lang-switcher";
var Sidebar = function (props) {
    var _a;
    var className = props.className;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var onToggle = function () {
        setOpen(function (prevState) { return !prevState; });
    };
    return (_jsxs("aside", { className: classNames(cls.Sidebar, (_a = {}, _a[cls.open] = open, _a), [className]), children: [_jsx(Button, { onClick: onToggle, className: "fdfds😃", children: "toggle" }), _jsxs("div", { className: cls.switchers, children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { className: cls.lang })] })] }));
};
export default Sidebar;
