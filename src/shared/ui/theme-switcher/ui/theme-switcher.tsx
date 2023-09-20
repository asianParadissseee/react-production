import React, { type FC } from 'react'
import cls from './theme-switcher.module.scss'
import { classNames } from 'shared/lib/class-names/class-names'
import { Theme, useTheme } from 'app/providers/theme-provider'
import Button, { ThemeButton } from 'shared/ui/button/ui/button'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme()

    return (
      <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? 'DARK' : 'LIGHT'}
        </Button>
    );
}

export default ThemeSwitcher
