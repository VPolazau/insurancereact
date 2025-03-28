/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import {
    useUpdateEmailNotifivationsMutation,
    useUpdatePushNotificationsMutation,
} from '../../../../redux/injectsApi/notifications';
import { Card, CardBody, CardHeader, Layout, Typography, ModalWindow, RadioBtnGroup } from '../../../../components';
import { RadioBtns } from '../../../../utils/constants';
import { ModalWindowPassword } from '../../../../components/ModalWindowPassword';

import { PasswordCorrection } from './components';

import styles from './styles.module.css';

export const Settings = () => {
    const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false);
    const [isPasswordChangedSuccessfully, setIsPasswordChangedSuccessfully] = useState(false);
    const [pushOn, setPushOn] = useState(false);
    const [emailOn, setEmailOn] = useState(false);
    const isMounted = useRef(true);

    const [updatePushNotify] = useUpdatePushNotificationsMutation();
    const [updateEmailNotify] = useUpdateEmailNotifivationsMutation();

    const handleModalChangePassword = () => {
        setIsOpenChangePasswordModal(true);
    };

    useEffect(() => {
        if (!isMounted.current) {
            updatePushNotify({ pushNotification: pushOn });
        }
        isMounted.current = false;
    }, [pushOn]);

    useEffect(() => {
        if (!isMounted.current) {
            updateEmailNotify({ notificationStatus: emailOn });
        }
    }, [emailOn]);

    return (
        <Layout title="Настройки" className={styles.settingsLayout}>
            <Card className={styles.settingsCard}>
                <CardHeader className={styles.settingsHeader}>
                    <Typography variant="h3">Push-уведомления</Typography>
                </CardHeader>
                <CardBody>
                    <RadioBtnGroup
                        groupName="push-notifications"
                        selected="off"
                        options={RadioBtns}
                        notifyHandler={setPushOn}
                    />
                </CardBody>
            </Card>
            <Card className={styles.settingsCard}>
                <CardHeader className={styles.settingsHeader}>
                    <Typography variant="h3">Рассылка новостей по электронной почте</Typography>
                </CardHeader>
                <CardBody>
                    <RadioBtnGroup
                        groupName="mail-notifications"
                        selected="off"
                        options={RadioBtns}
                        notifyHandler={setEmailOn}
                    />
                </CardBody>
            </Card>
            <Card className={styles.settingsCard}>
                <CardHeader className={styles.settingsHeader}>
                    <Typography variant="h3">Рассылка новостей по Telegram</Typography>
                </CardHeader>
                <CardBody>
                    <RadioBtnGroup groupName="telegram-notifications" selected="off" options={RadioBtns} />
                </CardBody>
            </Card>
            <Card className={styles.settingsCard}>
                <CardHeader className={styles.settingsHeader}>
                    <Typography variant="h3">Безопасность</Typography>
                </CardHeader>
                <CardBody>
                    <button onClick={handleModalChangePassword}>
                        <Typography variant="medium" className={styles.passwordBtn}>
                            Изменить пароль
                        </Typography>
                    </button>
                </CardBody>
            </Card>
            {isOpenChangePasswordModal && (
                <ModalWindow width="500px" setIsOpen={setIsOpenChangePasswordModal} addBtnClose={true}>
                    <PasswordCorrection
                        setIsOpen={setIsOpenChangePasswordModal}
                        setIsSuccess={setIsPasswordChangedSuccessfully}
                    />
                </ModalWindow>
            )}
            {isPasswordChangedSuccessfully && (
                <ModalWindowPassword alt="success" setIsOpen={setIsPasswordChangedSuccessfully} />
            )}
        </Layout>
    );
};
