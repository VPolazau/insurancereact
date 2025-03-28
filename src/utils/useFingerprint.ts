import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useEffect, useState } from 'react';

export const useFingerprint = () => {
    const [fpHash, setFpHash] = useState('');

    useEffect(() => {
        const setFp = async () => {
            const fp = await FingerprintJS.load();

            const { visitorId } = await fp.get();

            setFpHash(visitorId);
        };
        setFp();
    }, []);

    return fpHash;
};
