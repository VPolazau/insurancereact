import { useEffect } from 'react';

export const useCheckRotation = () => {
    useEffect(() => {
        function handleOrientationChange() {
            alert('rotation changed!');
        }

        window.addEventListener('orientationchange', handleOrientationChange);

        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);
};
