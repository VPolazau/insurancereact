import React from 'react';
import cn from 'classnames';

import { ModalWindow } from '../ModalWindow';
import { Typography } from '../Typography';
import success from '../../assets/img/success.svg';
import error from '../../assets/img/errorCross.svg';

import styles from './styles.module.css';

interface IModalWindowPassword {
    className?: string;
    alt?: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addBtnClose?: boolean;
    textMessage?: string;
    navigate?: (arg: string) => void;
}

export const ModalWindowPassword = ({
    alt = 'success',
    setIsOpen,
    textMessage,
    className,
    navigate,
}: IModalWindowPassword) => {
    return (
        <ModalWindow
            navigate={navigate}
            setIsOpen={setIsOpen}
            addBtnClose={true}
            className={cn(className, styles.modalAnswer)}
        >
            <>
                <img alt={alt} src={alt === 'success' ? success : error} />
                <Typography variant="h3">
                    {textMessage
                        ? textMessage
                        : alt === 'success'
                        ? 'Пароль успешно изменен!'
                        : 'Произошла ошибка. Попробуйте еще раз!'}
                </Typography>
            </>
        </ModalWindow>
    );
};
