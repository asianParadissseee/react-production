import React, { type FC } from 'react'
import cls from './page-loader.module.scss'
import { classNames } from 'shared/lib/class-names/class-names'
import { Loader } from 'shared/ui/loader'

interface PageLoaderProps {
  className?: string
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
}

export default PageLoader
