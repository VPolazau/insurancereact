import React, { useState } from 'react';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';

import { EyeHide, EyeShow } from '../../../../../../assets/icons';

import styles from './styles.module.css';

interface IInputPassword extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isError?: FieldError | undefined | boolean;
}
export const InputPassword: React.FC<IInputPassword> = React.forwardRef(
    (props, ref: React.LegacyRef<HTMLInputElement>) => {
        const { isError = false, className, ...passProps } = props;
        const [showPassword, setShowPassword] = useState(false);

        const handleVisibility = () => {
            setShowPassword((b) => !b);
        };

        const DisplayIcon = showPassword ? EyeHide : EyeShow;
        return (
            <div className={styles.inputWrapper}>
                <input
                    {...passProps}
                    ref={ref}
                    type={showPassword ? 'text' : 'password'}
                    className={cn(styles.input, className)}
                />
                <DisplayIcon viewBox="0 0 24 24" className={styles.eye} type="button" onClick={handleVisibility} />
                <div className={isError ? cn(styles.borderWrapper, styles.borderWrapperError) : styles.borderWrapper} />
            </div>
        );
    }
);
