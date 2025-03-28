import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Portal, Button, Typography } from '../../../../components';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { setAgreeWithCookies } from '../../../../redux/slices/user';

import styles from './styles.module.css';

export const CookiePopup = () => {
    const [showPopup, setShowPopup] = useState(true);
    const dispatch = useAppDispatch();

    const handleAccept = () => {
        setShowPopup(false);
        dispatch(setAgreeWithCookies(true));
    };

    // явный null вместо && для избежания return false
    return showPopup ? (
        <Portal className={styles.cookiePopupBasic}>
            <>
                <Typography variant="medium" className={styles.descriptionCookie}>
                    Продолжая пользоваться сайтом, Вы принимаете согласие на обработку Ваших персональных данных (файлов
                    cookie). Пожалуйста, ознакомьтесь с{' '}
                    <Link to="/in-progress" className={styles.link}>
                        Политикой обработки файлов cookie
                    </Link>
                </Typography>
                <Button onClick={handleAccept} variant="primary">
                    Принять
                </Button>
            </>
        </Portal>
    ) : null;
};
