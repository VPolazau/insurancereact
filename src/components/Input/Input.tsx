import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import cn from 'classnames';

import { Error } from '../Error';
import { Typography } from '../Typography';

import styles from './styles.module.css';

export interface InputProps {
    name: string;
    label?: string;
    className?: string;
    errors?: string[];
}

interface IErrorsList {
    errors: string[];
}

export const ErrorsList = ({ errors }: IErrorsList) => (
    <>
        {errors.map((error) => (
            <Error key={error} errorMessage={error} />
        ))}
    </>
);

export const Input: React.ForwardRefExoticComponent<
    InputProps & InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<unknown>
> = forwardRef(({ name, label, className, errors, ...props }, ref) => {
    const [, meta] = useField(name);

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
                <label htmlFor={name}>
                    <Typography variant="emphasis">{label}</Typography>
                </label>
            </div>
            <Field
                innerRef={ref}
                className={cn(
                    className,
                    styles.formInput,
                    meta.error && styles.formInputError,
                    ((meta.error && meta.touched) || errors) && styles.inputError
                )}
                name={name}
                {...props}
            />
            <div className={styles.belowInputBlock}>
                {meta.error && meta.touched && Array.isArray(meta.error) && <ErrorsList errors={meta.error} />}
                {meta.error && meta.touched && typeof meta.error === 'string' && <Error errorMessage={meta.error} />}
                {errors && !meta.error ? <ErrorsList errors={errors} /> : null}
            </div>
        </div>
    );
});
