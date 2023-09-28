import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/class-names/class-names";
import cls from "./notfound-page.module.scss"
interface NotfoundPageProps {
    className?: string
}
const NotfoundPage: FC<NotfoundPageProps> = ({className}) => {
    const {t, } = useTranslation()
    return (
        <div className={classNames(cls.NotfoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};

export default NotfoundPage;
