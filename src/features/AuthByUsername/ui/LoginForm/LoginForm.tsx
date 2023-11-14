import React, {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/input';
import cls from './LoginForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../models/slice/loginSlice";
import {getLoginState} from "../../models/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../models/services/loginByUsername/loginByUsername";
import Text, {TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = memo(({className}) => {
    const {t} = useTranslation();

    const dispatch = useDispatch()
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))

    }, [dispatch, username, password])
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")}/>
            {
                error && <Text text={t("не правильный логин или пароль")} theme={TextTheme.ERROR}/>
            } <Input type="text" onChange={onChangeUsername} autoFocus placeholder={t('Введите имя')}
                     className={cls.input} value={username}/>
            <Input type="text" value={password} onChange={onChangePassword} placeholder={t('Введите пароль')}
                   className={cls.input}/>
            <Button disabled={isLoading} theme={ButtonTheme.OUTLINE} onClick={onLoginClick}
                    className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
});

export default LoginForm;
