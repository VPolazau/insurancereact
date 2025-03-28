import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface CardBodyProps {
    children: ReactNode;
    className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    const bodyClasses = cn(styles.cardBody, className);

    return <div className={bodyClasses}>{children}</div>;
};
