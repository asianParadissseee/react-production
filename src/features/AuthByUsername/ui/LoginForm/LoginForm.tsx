import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" autoFocus placeholder={t('Введите имя')} className={cls.input} />
            <Input type="text" placeholder={t('Введите пароль')} className={cls.input} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;
