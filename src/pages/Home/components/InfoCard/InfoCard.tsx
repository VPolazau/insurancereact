import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export interface IInfoCard {
    className?: string;
    children: React.ReactElement;
}
export const InfoCard: React.FC<IInfoCard> = ({ className, children }) => {
    return (
        <div className={cn(styles.infoCardBasic, className)} data-testid="infoCard">
            <div className={styles.rectangle} />
            {children}
        </div>
    );
};
