import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from '../../routes';

import { ErrorBoundary } from '../index';

import styles from './styles.module.css';

export const App = (): ReactElement => {
    const element = useRoutes(routes);

    return (
        <div className={styles.content}>
            <ErrorBoundary>{element}</ErrorBoundary>
        </div>
    );
};
