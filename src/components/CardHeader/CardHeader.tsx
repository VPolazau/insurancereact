import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    const headerClasses = cn(styles.cardHeader, className);

    return <div className={headerClasses}>{children}</div>;
};
