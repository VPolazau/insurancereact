import React from 'react';

import { ModalWindow, Typography } from '../../../../../../../../components';

import { decodeHtmlEntities } from '../../../../../../../../utils/utilities';

import { RESPONSE_POPUP_CONTENT } from '../../../../../../../../utils/constants';

import styles from './styles.module.css';

interface IResponsePopupProps {
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    status: string;
}

export const ResponsePopup: React.FC<IResponsePopupProps> = ({ onClose, status }) => {
    const renderContent = () => {
        if (status === 'approved') {
            const { message, requisitesTitle, requisites } = RESPONSE_POPUP_CONTENT.approved;

            return (
                <>
                    <Typography variant="medium">{decodeHtmlEntities(message)}</Typography>
                    <div className={styles.requisites}>
                        <Typography variant="h4">{requisitesTitle}</Typography>
                        {requisites.map((requisite, index) => (
                            <div className={styles.info} key={index}>
                                <Typography variant="emphasis">{requisite.label}</Typography>
                                <Typography variant="medium">{requisite.value}</Typography>
                            </div>
                        ))}
                    </div>
                </>
            );
        } else if (status === 'rejected') {
            const { message, additionalMessage } = RESPONSE_POPUP_CONTENT.rejected;

            return (
                <div className={styles.message}>
                    <Typography variant="medium">{decodeHtmlEntities(message)}</Typography>
                    <Typography variant="medium">{decodeHtmlEntities(additionalMessage)}</Typography>
                </div>
            );
        }

        return null;
    };

    const { title, signature } = RESPONSE_POPUP_CONTENT.commonText;

    return (
        <ModalWindow setIsOpen={onClose} addBtnClose={true}>
            <div className={styles.container}>
                <Typography variant="h3" className={styles.title}>
                    {title}
                </Typography>
                {renderContent()}
                <Typography variant="h3" className={styles.signature}>
                    {decodeHtmlEntities(signature)}
                </Typography>
            </div>
        </ModalWindow>
    );
};
