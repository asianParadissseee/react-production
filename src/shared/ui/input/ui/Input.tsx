import React, {
    ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string;
    onChange?: (value: string) => void,
    autoFocus?: boolean
}

const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        type = 'text',
        onChange,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaterPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaterPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaterPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper)}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                    ref={ref}
                />

                {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px ` }} />}
            </div>
        </div>
    );
});

export default Input;
