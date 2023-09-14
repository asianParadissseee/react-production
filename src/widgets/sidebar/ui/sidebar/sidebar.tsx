import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/class-names/class-names";
import cls from "./sidebar.module.scss"
import Button from "shared/ui/button/button";
import {ThemeSwitcher} from "shared/ui/theme-switcher";

interface SidebarProps {
    className?: string

}

const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props
    const [open, setOpen] = useState(false)

    const onToggle = () => {
        setOpen((prevState) => !prevState)
    }
    return (
        <aside className={classNames(cls.Sidebar, {[cls.open]: open}, [className])}>
            <Button onClick={onToggle} className={"fdfds😃"}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={"dfdsf"}/>
            </div>

        </aside>
    );
};

export default Sidebar;
