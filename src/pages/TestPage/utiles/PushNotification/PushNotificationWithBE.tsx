import { useEffect } from 'react';

export const PushNotificationWithBE = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(function (registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(function (error) {
                    console.error('Service Worker registration failed:', error);
                });
        }

        const subscribeUser = async () => {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'YOUR_PUBLIC_VAPID_KEY', // Замените на ваш публичный VAPID ключ
            });

            console.log('User is subscribed:', subscription);

            // Отправляем подписку на ваш бэкенд для сохранения
            await fetch('/api/save-subscription', {
                method: 'POST',
                body: JSON.stringify(subscription),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        };

        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                subscribeUser();
            }
        });
    }, []);

    return (
        <div>
            <h1>PWA Push Notifications</h1>
        </div>
    );
};
