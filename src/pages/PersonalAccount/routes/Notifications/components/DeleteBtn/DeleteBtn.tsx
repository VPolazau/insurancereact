import { useState } from 'react';

import { DeleteIcon } from '../../../../../../assets/icons';
import { ConfirmPopup } from '../ConfirmPopup';
import { CONFIRM_POPUP_TITLES } from '../../../../../../utils/constants';
import { decodeHtmlEntities } from '../../../../../../utils/utilities';

import styles from './styles.module.css';

type Props = {
    onSubmit: () => void;
};

export const DeleteBtn = ({ onSubmit }: Props) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const handleDelete = () => {
        setIsConfirmOpen(true);
    };

    const closePopUp = () => {
        setIsConfirmOpen(false);
    };

    const confirmDeletion = () => {
        setIsConfirmOpen(false);
        onSubmit();
    };
    return (
        <>
            <button onClick={handleDelete}>
                <DeleteIcon className={styles.deleteBtn} />
            </button>
            {isConfirmOpen && (
                <ConfirmPopup
                    title={decodeHtmlEntities(CONFIRM_POPUP_TITLES.notification)}
                    onDismiss={closePopUp}
                    onConfirm={confirmDeletion}
                />
            )}
        </>
    );
};
