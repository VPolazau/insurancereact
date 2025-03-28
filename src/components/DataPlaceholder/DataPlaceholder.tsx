import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import policiesImage from '../../assets/img/policies.svg';
import requestsImage from '../../assets/img/requests.svg';
import massageImage from '../../assets/img/massage.svg';
import { Typography, Button } from '../index';
import { PLACEHOLDERS } from '../../utils/constants';
import { decodeHtmlEntities } from '../../utils/utilities';

import styles from './styles.module.css';

export const DataPlaceholder: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const renderContent = () => {
        const currentPath = location.pathname;

        const handleButtonClick = () => {
            if (currentPath === '/account/policies/insurance-policies') {
                navigate('/in-progress');
            } else if (currentPath === '/account/policies/insurance-requests') {
                navigate('/in-progress');
            } else if (currentPath.startsWith('/account/notifications')) {
                navigate('/');
            }
        };

        if (currentPath === '/account/policies/insurance-policies') {
            return (
                <>
                    <img src={policiesImage} alt="Полисы" />
                    <Typography variant="h2" className={styles.title}>
                        {decodeHtmlEntities(PLACEHOLDERS.policies.title)}
                    </Typography>
                    <Typography variant="h4" className={styles.subTitle}>
                        {decodeHtmlEntities(PLACEHOLDERS.policies.subTitle)}
                    </Typography>
                    <Button variant="primary" onClick={handleButtonClick}>
                        {decodeHtmlEntities(PLACEHOLDERS.policies.buttonText)}
                    </Button>
                </>
            );
        } else if (currentPath === '/account/policies/insurance-requests') {
            return (
                <>
                    <img src={requestsImage} alt="Заявки" />
                    <Typography variant="h2" className={styles.title}>
                        {decodeHtmlEntities(PLACEHOLDERS.requests.title)}
                    </Typography>
                    <Typography variant="h4" className={styles.subTitle}>
                        {decodeHtmlEntities(PLACEHOLDERS.requests.subTitle)}
                    </Typography>
                    <Button variant="primary" onClick={handleButtonClick}>
                        {decodeHtmlEntities(PLACEHOLDERS.requests.buttonText)}
                    </Button>
                </>
            );
        } else if (currentPath.startsWith('/account/notifications')) {
            return (
                <>
                    <img src={massageImage} alt="Уведомления" />
                    <Typography variant="h2" className={styles.title}>
                        {decodeHtmlEntities(PLACEHOLDERS.notifications.title)}
                    </Typography>
                    <Typography variant="h4" className={styles.subTitle}>
                        {decodeHtmlEntities(PLACEHOLDERS.notifications.subTitle)}
                    </Typography>
                    <Button variant="primary" onClick={handleButtonClick}>
                        {decodeHtmlEntities(PLACEHOLDERS.notifications.buttonText)}
                    </Button>
                </>
            );
        }

        return null;
    };

    return <div className={styles.placeholder}>{renderContent()}</div>;
};
