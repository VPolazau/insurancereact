import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button, Loader, Typography } from '../../components';
import { EMAIL_CONFIRMED } from '../../utils/constants';
import { decodeHtmlEntities } from '../../utils/utilities';
import { useConfirmEmailMutation } from '../../redux/injectsApi';

import styles from './styles.module.css';

export const EmailConfirmation = () => {
    const [queryParameters] = useSearchParams();
    const code = queryParameters.get('secret_code') ?? '';

    const navigate = useNavigate();
    if (!queryParameters) navigate('/');

    const [confirmEmail] = useConfirmEmailMutation();
    const [isConfirmed, setConfirmation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const initialized = useRef(false);

    useEffect(() => {
        const checkCode = async () => {
            try {
                setIsLoading(true);
                await confirmEmail({ secret_code: code }).unwrap();
                setConfirmation(true);
            } catch (error) {
                // navigate('/home'); //TODO: узнать действие в случае ошибки у аналитиков
            }

            setTimeout(() => setIsLoading(false), 1300);
        };

        if (!initialized.current) {
            initialized.current = true;
            checkCode();
        }
    }, [code, confirmEmail]);

    const handleClick = () => navigate('/home');

    return (
        <div className={styles.container}>
            {isConfirmed && !isLoading && (
                <Typography variant="h2" className={styles.heading} data-testid="headerEmailConfirmation">
                    {decodeHtmlEntities(EMAIL_CONFIRMED)}
                </Typography>
            )}
            {isLoading && <Loader />}
            <Button variant="primary" onClick={handleClick} className={styles.button}>
                На главную
            </Button>
        </div>
    );
};
