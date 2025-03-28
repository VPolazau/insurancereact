import React from 'react';

import { Typography } from '../../../../../../../../components';

import styles from './styles.module.css';

type StatusProps = {
    status: string;
};

export const Status: React.FC<StatusProps> = ({ status }) => {
    let statusText;
    let statusColor;

    switch (status) {
        case 'approved':
            statusText = 'Одобрено';
            statusColor = '#D4FFE5';
            break;
        case 'rejected':
            statusText = 'Отказано';
            statusColor = '#FFDED4';
            break;
        case 'pending':
            statusText = 'Ожидание';
            statusColor = '#FAF6D0';
            break;
        default:
            statusText = 'Неизвестно';
            statusColor = '#D7DDDA';
    }

    return (
        <div style={{ backgroundColor: statusColor }} className={styles.container}>
            <Typography className={styles.statusText} variant="emphasis">
                {statusText}
            </Typography>
        </div>
    );
};
