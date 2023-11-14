import React, {FC} from 'react';
import {Modal} from "shared/ui/Modal/Modal";
import LoginForm from "entities/features/AuthByUsername/ui/LoginForm/LoginForm";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss"

interface LoginModalProps {
    className?: string;
    isOpen: boolean
    onClose: () => void
}

const LoginModal: FC<LoginModalProps> = (props) => {
    const {className, isOpen, onClose} = props
    return (
        <Modal className={classNames(cls.LoginModal, {},[className])}
        isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm/>
        </Modal>
    );
};

export default LoginModal;
