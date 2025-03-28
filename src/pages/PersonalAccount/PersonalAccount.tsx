import React from 'react';
import { Outlet } from 'react-router-dom';

import { AccountHeader, Aside } from './components';
import styles from './styles.module.css';

export const PersonalAccount: React.FC = () => {
    return (
        <div className={styles.container}>
            <Aside />
            <div className={styles.accountContent}>
                <AccountHeader />
                <Outlet />
            </div>
        </div>
    );
};
