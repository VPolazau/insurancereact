import React from 'react';

import { ModalWindow, Button, Typography } from '../../../../../../components';
import attention from '../../../../../../assets/img/attention.svg';
import { decodeHtmlEntities } from '../../../../../../utils/utilities';

import styles from './styles.module.css';

interface IConfirmPopupProps {
    title: string;
    onDismiss: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: () => void;
}

export const ConfirmPopup: React.FC<IConfirmPopupProps> = ({ title, onDismiss, onConfirm }) => {
    const handleDismissClick = () => {
        onDismiss(false);
    };

    const handleConfirmClick = () => {
        onConfirm();
    };

    return (
        <ModalWindow setIsOpen={onDismiss}>
            <div className={styles.container}>
                <img className={styles.image} src={attention} alt="Внимание" />
                <Typography variant="h3" className={styles.title}>
                    {decodeHtmlEntities(title)}
                </Typography>
                <div className={styles.buttonContainer}>
                    <Button variant="primary" className={styles.dismissButton} onClick={handleDismissClick}>
                        Нет
                    </Button>
                    <button className={styles.confirmButton} onClick={handleConfirmClick}>
                        <Typography variant="medium">Да</Typography>
                    </button>
                </div>
            </div>
        </ModalWindow>
    );
};
