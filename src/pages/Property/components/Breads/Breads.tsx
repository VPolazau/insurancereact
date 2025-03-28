import React from 'react';

import { Link } from 'react-router-dom';

import { Typography } from '../../../../components';

import styles from './styles.module.css';

export const Breads = () => {
    return (
        <div className={styles.container}>
            <Link to="/home">
                <Typography variant="small">Главная</Typography>
            </Link>
            <Link to="/property">
                <Typography variant="small">/&nbsp;&nbsp;Имущество</Typography>
            </Link>
            <Typography variant="small" className={styles.titleForm}>
                <Typography variant="small">/&nbsp;&nbsp;Квартира</Typography>
            </Typography>
        </div>
    );
};
