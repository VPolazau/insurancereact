import React, { useEffect, useLayoutEffect, useState } from 'react';

import { Button, Input, ModalWindow, Typography } from '../../components';
import touchId from '../../assets/img/touchId.png';

import { generateChallenge, useWebAuthn } from './utiles/webAuth/useWebAuth';
import { usePushNotification } from './utiles/PushNotification/usePushNotification';
import QrScannerComponent from './templates/QrScannerComponent/QrScannerComponent';
import { getBiometricDetectorType } from './utiles/biometryTypeDetector/biometryTypeDetector';
import { EmptySnowCss } from './templates/NewYear/EmptySnowCss';

import styles from './styles.module.css';
import cn from 'classnames';
import { CodeInput } from './templates/CodeInput';
import { useAutoUpdatingDate } from './utiles/useAutoUpdatingDate';
import { useCheckRotation } from './utiles/useCheckRotation';
import { useGetTelContacts } from './utiles/useGetTelContacts';

const rpOptions = {
    rpId: window.location.hostname,
    rpName: 'BBBBBBBBBBBBBBBBBBBBBBB',
};
export const TestPage = () => {
    const [isQuickLoginRequired, setIsQuickLoginRequired] = useState(true);
    const { getCredential, getAssertion, checkUsability } = useWebAuthn(rpOptions);
    const { requestPermission, sendNotification } = usePushNotification();
    const [isOpenScanner, setIsOpenScanner] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    // const dynamicDate = useAutoUpdatingDate({ hours: 15, minutes: 13, timeZone: 3 });

    useCheckRotation();
    const { handleGetContacts, contact } = useGetTelContacts();

    useLayoutEffect(() => {
        const handleCheck = async () => {
            // Проверка face/touchID
            await checkUsability().then((bool) => {
                if (bool && !!localStorage.getItem('quickLoginUbrr')) {
                    setIsQuickLoginRequired(false);
                }
            });

            // Проверка пушей
            if (!('Notification' in window)) {
            }
        };

        handleCheck();
    }, []);

    const handleSaveAuthRegistration = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (response.status === 400) {
                throw new Error();
            }
        } catch {
            localStorage.removeItem('quickLoginUbrr');
            console.log('Удалил');
        }
    };
    const handleRegistration = async () => {
        const challenge = generateChallenge();

        await getCredential({
            challenge,
            userDisplayName: '9992342342231',
            userId: '1111',
            userName: '9992342342231',
        })
            .then((cred) => {
                if (cred) {
                    localStorage.setItem('quickLoginUbrr', 'true');
                    setIsQuickLoginRequired(false);
                    console.log('Создал');
                    handleSaveAuthRegistration();
                }
            })
            .catch((err) => {
                console.log('error');
                localStorage.removeItem('quickLoginUbrr');
                setIsQuickLoginRequired(true);
            });
    };

    const handleEnter = async () => {
        const challenge = generateChallenge();

        const assertion = await getAssertion({ challenge }).catch((err) => {
            localStorage.removeItem('quickLoginUbrr');
            setIsQuickLoginRequired(true);
        });

        if (assertion) {
            console.log(assertion);
            // const userHandle = get(assertion, 'response.userHandle');
            // @ts-ignore
            const { userHandle } = assertion.response;
            const userHandleDecode = new TextDecoder().decode(new Uint8Array(userHandle));
            // const password = userHandleDecode.split('::')[1]
            console.log('webAuthId:', assertion.id);
            console.log('userHandle', userHandle);
            console.log('password:', userHandleDecode);
        }
    };

    const handleSendNotification = async () => {
        await sendNotification();
    };

    const handleCheckNotification = async () => {
        await requestPermission();
    };

    return (
        <>
            <br />
            <div className={styles.row}>
                <Button variant="primary" onClick={handleCheckNotification} className={styles.buttonDesign}>
                    Проверка подписки
                </Button>
                <Button variant="primary" onClick={handleSendNotification} className={styles.buttonDesign}>
                    Отправить push уведомление
                </Button>
            </div>
            <br />
            <div id="notification" className={styles.notification}>
                PUSH NOTIFICATION
            </div>
            <br />
            <div className={styles.row}>
                <Button variant="primary" onClick={handleRegistration} className={styles.buttonDesign}>
                    Регистрация
                </Button>
                <Button
                    variant="secondary"
                    onClick={handleEnter}
                    className={cn(styles.touchId_btn, isQuickLoginRequired ? '' : styles.visible)}
                >
                    <img src={touchId} />
                </Button>
            </div>
            <br />
            <Button variant="secondary" className={styles.buttonDesign} onClick={handleGetContacts}>
                Контакты
            </Button>
            <span>{contact}</span>

            <br />
            <div className={styles.row}>
                <Button
                    variant={'primary'}
                    className={styles.buttonDesign}
                    onClick={() => setIsOpenScanner((bool) => !bool)}
                >
                    {isOpenScanner ? 'Закрыть сканнер' : 'Открыть cканнер'}
                </Button>
                {isOpenScanner && <QrScannerComponent />}
            </div>
            <br />

            <h1>{getBiometricDetectorType()}</h1>
            <h1>
                `width:${window.screen.width * window.devicePixelRatio}, height:$
                {window.screen.height * window.devicePixelRatio}`
            </h1>

            <EmptySnowCss />
            <CodeInput value={otpCode} onChange={(value: string) => setOtpCode(value)} />
            {/*<br />*/}
            {/*<h2>{dynamicDate}</h2>*/}
            {/*<br />*/}
        </>
    );
};
