import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../assets/icons';
import { COPYRIGHT, MAIN_OFFICE_ADDRESS, PHONE_NUMBER } from '../../utils/constants';
import { Typography } from '../Typography';
import { decodeHtmlEntities } from '../../utils/utilities';

import styles from './styles.module.css';

export const Footer: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <button className={styles.logoButton} onClick={handleLogoClick} data-testid="iconButtonComponent">
                        <Logo viewBox="0 0 150 46" className={styles.logo} />
                    </button>
                    <Typography className={styles.subtext} variant="small">
                        {decodeHtmlEntities(COPYRIGHT)}
                    </Typography>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <Typography variant="h4">Главный офис</Typography>
                        <Typography className={styles.subtext} variant="small">
                            {decodeHtmlEntities(MAIN_OFFICE_ADDRESS)}
                        </Typography>
                    </div>
                    <div className={styles.textContainer}>
                        <Typography variant="h4">Связаться с нами</Typography>
                        <Typography className={styles.subtext} variant="small">
                            {PHONE_NUMBER}
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
};
