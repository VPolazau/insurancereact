import React from 'react';

import { Typography } from '../../../../../../components';

import styles from './styles.module.css';

interface IProps {
    step: number;
}

export const RegistrationFormStepIndicator: React.FC<IProps> = ({ step }) => (
    <div className={styles.stepIndicator}>
        <div className={styles.stepIndicatorContainer}>
            <div className={styles.stepItem}>
                <Typography
                    variant="medium"
                    className={`${styles.stepItemTitle} ${step >= 1 ? styles.activeTitle : ''}`}
                >
                    Данные пользователя
                </Typography>
                <div className={`${styles.stepCircle} ${step >= 1 ? styles.activeStep : ''}`} />
            </div>
        </div>
        <div className={styles.stepIndicatorContainer}>
            <div className={styles.stepItem}>
                <Typography
                    variant="medium"
                    className={`${styles.stepItemTitle} ${step === 2 ? styles.activeTitle : ''}`}
                >
                    Данные для входа
                </Typography>
                <div className={`${styles.stepCircle} ${step === 2 ? styles.activeStep : ''}`} />
            </div>
        </div>
    </div>
);
