import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/class-names/class-names";
import cls from "./lang-switcher.module.scss";
import i18n from "i18next";
import Button, { ThemeButton } from "shared/ui/button/ui/button";
import { useTranslation } from "react-i18next";
var LangSwitcher = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var toggle = function () {
        var newLanguage = i18n.language === "ru" ? "en" : "ru";
        i18n.changeLanguage(newLanguage).then(function () {
            console.log("Switched to language: ".concat(newLanguage));
        });
    };
    return (_jsx("div", { children: _jsx(Button, { theme: ThemeButton.CLEAR, className: classNames(cls.LangSwitcher, {}, [className]), onClick: toggle, children: t("Язык") }) }));
};
export default LangSwitcher;
