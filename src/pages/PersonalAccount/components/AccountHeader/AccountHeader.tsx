import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, NotificationCount, ModalWindow, Button } from '../../../../components';
import { Bell } from '../../../../assets/icons';
import { NotificationTitle } from '../NotificationTitle';
import { useGetUserQuery } from '../../../../redux/injectsApi/user/userApi';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { selectNotifications, setUserData } from '../../../../redux/slices/user';
import { useAuth } from '../../../../shared/hooks';
import { formatPhoneNumber } from '../../../../utils/formatPhoneNumber';

import styles from './styles.module.css';

export const AccountHeader: React.FC = () => {
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useAuth();

    const { data } = useGetUserQuery(undefined, {
        skip: !isAuth,
    });

    const notifications = useAppSelector(selectNotifications);

    useEffect(() => {
        if (data) {
            dispatch(setUserData(data));
        }
        // eslint-disable-next-line
    }, [data]);

    const handleOpenModalNotification = () => {
        setIsOpenNotification(true);
    };

    const handleCloseModalNotification = () => {
        setIsOpenNotification(false);
    };
    const handleLogout = () => {
        navigate('/home');
    };
    const handleNotificationBtnClick = () => {
        navigate('/account/notifications/messages');
        handleCloseModalNotification();
    };

    return (
        <div className={styles.accountHeader}>
            <Typography variant="small" className={styles.phone}>
                {data ? formatPhoneNumber(data?.mobilePhone) : ''}
            </Typography>
            <div className={styles.wrapperNotification}>
                <button onClick={handleOpenModalNotification}>
                    <Bell className={styles.iconBell} />
                </button>
                <NotificationCount top="-14px" left="14px" count={1000} />
            </div>
            <Typography variant="medium" className={styles.name}>
                {data?.firstName} {data?.lastName}
            </Typography>
            <div>
                <Button onClick={handleLogout} variant="secondary">
                    <Typography variant="small">На главную</Typography>
                </Button>
            </div>
            {isOpenNotification && (
                <ModalWindow top="75px" right="324px" setIsOpen={setIsOpenNotification}>
                    <div className={styles.modalContent}>
                        {notifications.map((notification) => (
                            <NotificationTitle
                                key={notification.id}
                                {...notification}
                                onClick={handleCloseModalNotification}
                            />
                        ))}
                        <Button
                            variant="secondary"
                            onClick={handleNotificationBtnClick}
                            className={styles.notificationBtn}
                        >
                            <Typography variant="medium">Посмотреть всё</Typography>
                        </Button>
                    </div>
                </ModalWindow>
            )}
        </div>
    );
};
