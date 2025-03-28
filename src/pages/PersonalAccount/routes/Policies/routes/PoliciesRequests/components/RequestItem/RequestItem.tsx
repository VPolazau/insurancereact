import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '../../../../../../../../components';
import { ConfirmPopup } from '../../../../../Notifications/components/ConfirmPopup';
import { Dots } from '../../../../../../../../assets/icons';
import { CONFIRM_POPUP_TITLES } from '../../../../../../../../utils/constants';
import { ResponsePopup } from '../ResponsePopup';
import { Status } from '../Status';

import styles from './styles.module.css';

export interface IRequest {
    id: number;
    type: string;
    number: number;
    created: string;
    status: string;
    review: string;
    response?: boolean;
    extension?: boolean;
}

interface IRequestItemProps {
    request: IRequest;
    isOpen: boolean;
    onDotsClick: () => void;
    onClose: () => void;
}

export const RequestItem: React.FC<IRequestItemProps> = ({ request, isOpen, onDotsClick, onClose }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isResponseOpen, setIsResponseOpen] = useState(false);

    const { id, type, number, created, status, review, response, extension } = request;

    const navigate = useNavigate();

    const handleRecallClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsConfirmOpen(true);
        onClose();
    };

    const handleConfirmClick = () => {
        navigate('/in-progress');
    };

    const handleResponseClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsResponseOpen(true);
        onClose();
    };

    return (
        <li className={styles.requestItem}>
            <div>
                <Typography variant="medium">{type}</Typography>
                <Typography className={styles.numberText} variant="small">
                    № {number}
                </Typography>
                {extension && (
                    <Typography className={styles.extensionText} variant="emphasis">
                        Продление
                    </Typography>
                )}
            </div>
            <Typography variant="medium">{created}</Typography>
            <Typography variant="medium">{review}</Typography>
            <div>
                <Status status={status} />
                {response && (
                    <Typography className={styles.responseText} variant="emphasis" onClick={handleResponseClick}>
                        Ответ компании
                    </Typography>
                )}
            </div>
            <div>
                <Dots
                    viewBox="0 0 24 24"
                    id={`dots-${id}`}
                    className={styles.dotsBtn}
                    type="button"
                    onClick={onDotsClick}
                />
                {isOpen && (
                    <div className={styles.menu}>
                        <button className={styles.recallBtn} onClick={handleRecallClick}>
                            <Typography variant="medium">Отозвать</Typography>
                        </button>
                    </div>
                )}
            </div>
            {isConfirmOpen && (
                <ConfirmPopup
                    title={CONFIRM_POPUP_TITLES.request}
                    onDismiss={setIsConfirmOpen}
                    onConfirm={handleConfirmClick}
                />
            )}
            {isResponseOpen && <ResponsePopup onClose={setIsResponseOpen} status={status} />}
        </li>
    );
};
