import React, {type ButtonHTMLAttributes, type FC, type ReactNode} from 'react'
import cls from './button.module.scss'
import {classNames} from 'shared/lib/class-names/class-names'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {children, className, theme, ...otherProps} = props
    return (
        <button type={'button'} {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
}

export default Button
