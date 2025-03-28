const checkIsIphoneModelUseFaceId = (): boolean => {
    const screenWidth = window.screen.width * window.devicePixelRatio; // Ширина экрана устройства
    const screenHeight = window.screen.height * window.devicePixelRatio; // Высота экрана устройства

    // Модели iPhone X, XS, XR и новее
    const modelsWithFaceId = [
        { width: 1125, height: 2436 }, // iPhone X, XS, 11 Pro
        { width: 828, height: 1792 }, // iPhone XR, 11
        { width: 1170, height: 2532 }, // iPhone 12, 12 Pro, 13, 13 Pro, 14
        { width: 1080, height: 2340 }, // iPhone 12 Mini, 13 Mini
        { width: 1284, height: 2778 }, // iPhone 12 Pro Max, 13 Pro Max, 14 Plus, 14 Pro Max
        { width: 1290, height: 2796 }, // iPhone 14 Pro, 14 Pro Max
        { width: 1179, height: 2556 }, // iPhone 15, 15 Pro
        { width: 1290, height: 2796 }, // iPhone 15 Plus, 15 Pro Max
    ];

    // Размеры экрана для модели iPhone 14
    const iphone14Width = 1170;
    const iphone14Height = 2532;

    return modelsWithFaceId.some(
        (model) =>
            (screenWidth === model.width && screenHeight === model.height) ||
            (screenWidth === model.height && screenHeight === model.width) ||
            // Устройства с разрешением больше, чем у iPhone 14 предположительно для 16,17 и далее моделей
            (screenWidth > iphone14Width && screenHeight > iphone14Height) ||
            (screenWidth > iphone14Height && screenHeight > iphone14Width)
    );
};

export const getBiometricDetectorType = (): 'ios-face-id' | 'ios-fingerprint' | 'fingerprint' => {
    const userAgent = navigator.userAgent;

    const isAppleDevice = /iPad|iPhone|iPod/.test(userAgent);

    if (isAppleDevice) {
        const iosVersionMatch = userAgent.match(/OS (\d+)_/);
        if (iosVersionMatch) {
            const iosVersion = parseInt(iosVersionMatch[1], 10);

            // Получаем модель iPhone
            const isIphoneModelUseFaceId = checkIsIphoneModelUseFaceId();

            // Проверка: если устройство новое и версия iOS 11 или выше, используем Face ID
            if (isIphoneModelUseFaceId && iosVersion >= 11) {
                return 'ios-face-id';
            }
        }
        return 'ios-fingerprint'; // Если устройство старое или iOS ниже 11
    }

    return 'fingerprint'; // Для остальных устройств
};
