import React, { HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface CardProps extends HTMLProps<HTMLDivElement> {
    showHeader?: boolean;
    children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, showHeader = true, children, ...rest }) => {
    const cardClasses = cn(styles.card, className);

    return (
        <div className={cardClasses} data-testid="card" {...rest}>
            {children}
        </div>
    );
};
