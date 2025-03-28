import React, { ReactNode, MouseEventHandler, FormEventHandler } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface IButton extends React.ComponentProps<'button'> {
    variant?: 'primary' | 'secondary' | 'secondaryM' | 'link';
    children?: ReactNode | string;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
    variant = 'primary',
    children = '',
    disabled = false,
    onClick,
    onSubmit,
    className,
}: IButton) => {
    const btnClass = cn(className, styles.btn, styles[variant]);
    return (
        <button className={btnClass} disabled={disabled} onClick={onClick} onSubmit={onSubmit} data-testid="button">
            {children}
        </button>
    );
};
