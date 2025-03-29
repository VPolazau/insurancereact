import { useState } from 'react';

export const useGetTelContacts = () => {
    const [contact, setContact] = useState('');
    const handleGetContacts = async () => {
        if ('contacts' in navigator && 'ContactsManager' in window) {
            try {
                // @ts-ignore
                const contacts = await navigator.contacts.select(['tel'], { multiple: false });
                setContact(contacts[0].tel[0]);
            } catch (error) {
                alert('Ошибка: телефон не выбран');
            }
        } else {
            // const { userAgent } = navigator;
            // const match = userAgent.match(/OS (\d+)_/);
            // const osVersion = match ? parseInt(match[1], 10) : null;
            alert('ContactPicker не поддерживается');
        }
    };

    return {
        handleGetContacts,
        contact,
    };
};
