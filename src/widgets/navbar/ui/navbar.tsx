import React, {FC} from 'react';
import {classNames} from "shared/lib/class-names/class-names";
import cls from "./navbar.module.scss"
import {useTheme} from "app/providers/theme-provider";
import AppLink, {AppLinkTheme} from "shared/ui/app-link/app-link";

interface NavbarProps {
    className?: string

}

const Navbar: FC<NavbarProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme()
    return (
        <header className={classNames(cls.navbar, {}, [])}>
            <button onClick={toggleTheme}>
                toggle
            </button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Home</AppLink>
            </div>
        </header>
    );
};

export default Navbar;
