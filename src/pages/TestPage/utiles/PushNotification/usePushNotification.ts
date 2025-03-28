import { useEffect, useState } from 'react';

export const usePushNotification = () => {
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((reg) => {
                    console.log('Service Worker registered with scope:', reg.scope);
                    setRegistration(reg);
                })
                .catch((err) => console.error('Service Worker registration failed:', err));
        }
    }, []);

    const requestPermission = async () => {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    };

    const sendNotification = async () => {
        const notification = document.querySelector('#notification');

        if (Notification.permission === 'granted') {
            // @ts-ignore
            showNotification(notification.value);
        } else {
            if (Notification.permission !== 'denied') {
                const permission = await Notification.requestPermission();

                if (permission === 'granted') {
                    // @ts-ignore
                    showNotification(notification.value);
                }
            }
        }
    };

    const showNotification = async (body: any) => {
        const title = 'УБРиР';
        const registration = await navigator.serviceWorker.getRegistration();

        const payload = {
            ...body,
        };

        if (registration && 'showNotification' in registration) {
            registration.showNotification(title, payload);
        } else {
            new Notification(title, payload);
        }
    };

    return { requestPermission, sendNotification };
};

// export const registerServiceWorker = () => {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/service-worker.js')
//             .then(registration => {
//                 console.log('Service Worker registered with scope:', registration.scope);
//             })
//             .catch(error => {
//                 console.error('Service Worker registration failed:', error);
//             });
//     }
// }
