import React from 'react';

import { Button, ModalWindow, Typography } from '../../../../../../../../components';
import calendarIcon from '../../../../../../../../assets/img/calendar.svg';

import styles from './styles.module.css';

interface IConfirmPopupProps {
    onConfirm: React.Dispatch<React.SetStateAction<boolean>>;
    onCancel: () => void;
}

export const ConfirmPopupPolicy: React.FC<IConfirmPopupProps> = ({ onConfirm, onCancel }) => {
    const handleConfirmClick = () => {
        onConfirm(false);
    };

    const handleCancelClick = () => {
        onCancel();
    };

    return (
        <ModalWindow setIsOpen={onCancel} addBtnClose={true}>
            <div className={styles.container}>
                <img src={calendarIcon} alt="Календарь" />
                <div className={styles.blockText}>
                    <Typography variant="h3" className={styles.title}>
                        Продлить полис на текущих условиях ?
                    </Typography>
                    <Typography variant="h3" className={styles.title}>
                        Период страхования с 01.01.2024 по 01.01.2025
                    </Typography>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.cancelButton} onClick={handleCancelClick}>
                        <Typography variant="medium">Отмена</Typography>
                    </button>
                    <Button variant="primary" className={styles.confirmButton} onClick={handleConfirmClick}>
                        Продлить
                    </Button>
                </div>
            </div>
        </ModalWindow>
    );
};
