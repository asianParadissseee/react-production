import React, {FC} from 'react';
import cls from "./loader.module.scss"
import {classNames} from "shared/lib/class-names/class-names";


interface LoaderProps {
    className?: string
}

const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <div className={cls.ldsRipple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
