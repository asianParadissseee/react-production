import React, {FC} from 'react';
import cls from "./error-page.module.scss"
import {classNames} from "shared/lib/class-names/class-names";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/button";

interface ErrorPageProps {
    className?: string
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
}
const ErrorPage: FC<ErrorPageProps> = ({className}) => {

    const {t} = useTranslation()
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>
                {t("Извините, произошла ошибка")}
            </p>
            <Button onClick={reloadPage}>
                {t("Обновить страницу")}
            </Button>
        </div>

    );
};

export default ErrorPage;
