import React from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { Theme, useTheme } from '../../../../app/providers/ThemeProvider';
import LightIcon from '../../../assets/icons/theme-light.svg';
import DarkIcon from '../../../assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '../../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
