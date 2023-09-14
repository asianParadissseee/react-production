import React, {FC} from 'react';
import {classNames} from "shared/lib/class-names/class-names";
import cls from "./navbar.module.scss"
import AppLink, {AppLinkTheme} from "shared/ui/app-link/app-link";
import {ThemeSwitcher} from "shared/ui/theme-switcher";

interface NavbarProps {
    className?: string

}

const Navbar: FC<NavbarProps> = ({className}) => {

    return (
        <header className={classNames(cls.navbar, {}, [])}>
            <ThemeSwitcher className={"dfdsf"}/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Home</AppLink>
            </div>
        </header>
    );
};

export default Navbar;
