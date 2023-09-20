import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import cls from './app-link.module.scss'
import { classNames } from 'shared/lib/class-names/class-names'
import * as trace_events from 'trace_events'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    return (
      <Link {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
}

export default AppLink
