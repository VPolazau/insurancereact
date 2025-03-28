const notification = document.querySelector('#notification');

export const registration = await navigator.serviceWorker.getRegistration();
export const sendNotification = async () => {
    if (Notification.permission === 'granted') {
        // @ts-ignore
        showNotification(notification.value);
    } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            // @ts-ignore
            showNotification(notification.value);
        }
    }
};

const showNotification = (body: any) => {
    const title = 'PUSH NOTIFICATION';

    const payload = {
        body,
    };

    if (registration && 'showNotification' in registration) {
        registration.showNotification(title, payload);
    } else {
        new Notification(title, payload);
    }
};
