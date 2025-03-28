// self.addEventListener('push', function(event) {
//     const options = {
//         body: event.data ? event.data.text() : 'Default body',
//         icon: '/icon.png',
//         badge: '/icon.png'
//     };
//
//     event.waitUntil(
//         self.registration.showNotification('Push Notification', options)
//     );
// });

self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon || '/icon.png',
        badge: '/icon.png',
        data: {
            url: data.url
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
