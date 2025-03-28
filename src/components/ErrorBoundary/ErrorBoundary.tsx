import React, { Component, ErrorInfo, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Footer, Header, Typography } from '../index';
import { NavBar } from '../../pages/Home/components';

import attention from '../../assets/img/attention.svg';

import styles from './styles.module.css';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        /* eslint-disable no-console */
        console.error(error, errorInfo);
    }

    handleRefresh = () => {
        window.location.reload();
    };

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <>
                    <Header />
                    <NavBar />
                    <div className={styles.container}>
                        <img className={styles.attention} src={attention} alt="Внимание" />
                        <Typography variant="h3" className={styles.title}>
                            Произошла непредвиденная ошибка
                        </Typography>
                        <Typography variant="medium" className={styles.subtitle}>
                            Мы уже устраняем неисправность, попробуйте обновить страницу через некоторое время
                        </Typography>
                        <NavLink to="/home" className={styles.backButton} onClick={this.handleRefresh}>
                            Вернуться на главную
                        </NavLink>
                    </div>
                    <Footer />
                </>
            );
        }

        return this.props.children;
    }
}
