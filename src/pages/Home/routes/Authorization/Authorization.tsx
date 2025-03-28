import React from 'react';

import { AuthorizationForm } from './components';

import styles from './styles.module.css';

export const Authorization: React.FC = () => {
    return (
        <div className={styles.container}>
            <AuthorizationForm />
        </div>
    );
};
