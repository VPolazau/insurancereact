import { InputHTMLAttributes, ReactElement, forwardRef } from 'react';
import classNames from 'classnames';

import cl from './NewInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    name?: string;
    error?: string;
    errorMessage?: string;
    required?: boolean;
    icon?: ReactElement;
}

export const NewInput = forwardRef<HTMLInputElement, InputProps>(
    (
        { className = '', label, name = '', required = false, error = '', icon = null, errorMessage = '', ...rest },
        ref
    ) => {
        return (
            <div className={classNames(cl.container, className)}>
                {label && (
                    <label className={cl.label} htmlFor={name}>
                        {label} {required && <span className={cl.required}>*</span>}
                    </label>
                )}
                <div className={cl.inputContainer}>
                    <input
                        name={name}
                        ref={ref}
                        className={classNames(cl.input, { [cl.inputError]: error })}
                        {...rest}
                    />
                    {icon && <div className={cl.icon}>{icon}</div>}
                </div>
                {error && <span className={cl.error}>{errorMessage}</span>}
            </div>
        );
    }
);
