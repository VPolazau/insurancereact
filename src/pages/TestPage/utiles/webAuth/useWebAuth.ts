import { IAssertionOpt, ICredentialOpt, IWebAuth } from './webAuth.declaration';

export function useWebAuthn({ rpName, rpId, credentialOpt, assertionOpt }: IWebAuth) {
    const getCredential = async ({ userId, userName, userDisplayName, challenge }: ICredentialOpt) => {
        const publicKeyCredentialCreationOptions = {
            rp: {
                name: rpName,
                id: rpId,
            },
            user: {
                id: Uint8Array.from(userId, (c) => c.charCodeAt(0)),
                name: userName,
                displayName: userDisplayName,
            },
            challenge: Uint8Array.from(challenge, (c) => c.charCodeAt(0)),
            pubKeyCredParams: [
                {
                    type: 'public-key',
                    alg: -7,
                },
            ],
            timeout: 60000,
            excludeCredentials: [],
            authenticatorSelection: {
                authenticatorAttachment: 'platform',
                residentKey: 'required',
                requireResidentKey: true,
                userVerification: 'required',
            },
            attestation: 'direct',
            extensions: {
                credProps: true,
            },
            ...credentialOpt,
        } as PublicKeyCredentialCreationOptions;

        return await navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    };

    const getAssertion = async ({ challenge }: IAssertionOpt) => {
        const publicKeyCredentialRequestOptions = {
            challenge: Uint8Array.from(challenge, (c) => c.charCodeAt(0)),
            rpId: rpId,
            timeout: 60000,
            userVerification: 'required',
            ...assertionOpt,
        } as PublicKeyCredentialRequestOptions;

        console.log('publicKeyCredentialRequestOptions', publicKeyCredentialRequestOptions);
        return await navigator.credentials.get({
            publicKey: publicKeyCredentialRequestOptions,
        });
    };

    const checkUsability = async () => {
        if (window.PublicKeyCredential) {
            console.log('WebAuthn API поддерживается.');
            try {
                const isAvailable = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
                if (isAvailable) {
                    console.log('Биометрический датчик доступен.');
                    return true;
                } else {
                    console.log('Биометрический датчик недоступен.');
                    return false;
                }
            } catch (error) {
                console.error('Ошибка при проверке биометрического датчика:', error);
                return false;
            }
        } else {
            console.log('WebAuthn API не поддерживается.');
            return false;
        }
    };

    return { getCredential, getAssertion, checkUsability } as const;
}

export const generateChallenge = () => {
    const challengeArray = new Uint8Array(32); // Генерация 32 байтов для Challenge
    crypto.getRandomValues(challengeArray); // Заполнение массива случайными байтами
    const challengeNumbers = Array.from(challengeArray); // Преобразование Uint8Array в массив чисел
    return window.btoa(String.fromCharCode.apply(null, challengeNumbers)); // Кодирование в Base64Url
};
