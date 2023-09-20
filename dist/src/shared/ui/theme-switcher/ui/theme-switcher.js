import { jsx as _jsx } from "react/jsx-runtime";
import cls from "./theme-switcher.module.scss";
import { classNames } from "shared/lib/class-names/class-names";
import { Theme, useTheme } from "app/providers/theme-provider";
import Button, { ThemeButton } from "shared/ui/button/ui/button";
var ThemeSwitcher = function (props) {
    var className = props.className;
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx(Button, { theme: ThemeButton.CLEAR, onClick: toggleTheme, className: classNames(cls.ThemeSwitcher, {}, [className]), children: theme === Theme.DARK ? "DARK" : "LIGHT" }));
};
export default ThemeSwitcher;
