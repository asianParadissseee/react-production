import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import cls from "./button.module.scss"
import {classNames} from "shared/lib/class-names/class-names";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    className?: string,
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {children, className, theme, ...otherProps} = props
    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};

export default Button;
