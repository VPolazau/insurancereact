import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Typography } from '../../../../components';

import styles from './styles.module.css';

export const Breads = () => {
    const { pathname } = useLocation();
    return (
        <div className={styles.container}>
            {pathname !== '/home/registration/email-confirmation' && (
                <Link to="/home">
                    <Typography variant="small">Главная</Typography>
                </Link>
            )}
            {pathname === '/home/reset-password' && (
                <Link to="/home/authorization">
                    <Typography variant="small">/&nbsp;&nbsp;Вход в Личный кабинет</Typography>
                </Link>
            )}
            <Typography variant="small" className={styles.titleForm}>
                {pathname === '/home/authorization' && (
                    <Typography variant="small">/&nbsp;&nbsp;Вход в Личный кабинет</Typography>
                )}
                {pathname === '/home/registration' && <Typography variant="small">/&nbsp;&nbsp;Регистрация</Typography>}
                {pathname === '/home/reset-password' && (
                    <Typography variant="small">/&nbsp;&nbsp;Восстановление пароля</Typography>
                )}
            </Typography>
        </div>
    );
};
