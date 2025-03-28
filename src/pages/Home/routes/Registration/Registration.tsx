import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export const Registration: React.FC = () => {
    return (
        <div className={styles.registration}>
            <Outlet />
        </div>
    );
};
