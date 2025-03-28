import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export const PasswordRecovery: React.FC = () => {
    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    );
};
