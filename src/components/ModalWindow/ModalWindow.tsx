import React from 'react';
import cn from 'classnames';

import { Portal } from '../Portal';
import { Cross } from '../../assets/icons';

import styles from './styles.module.css';

interface IModalWindow {
    height?: string;
    width?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    children: React.ReactElement;
    className?: string;
    addBtnClose?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigate?: (arg: string) => void;
}
export const ModalWindow: React.FC<IModalWindow> = ({
    height,
    width,
    top,
    right,
    bottom,
    left,
    className,
    addBtnClose = false,
    children,
    setIsOpen,
    navigate,
}) => {
    const handleCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        const target = e.target as HTMLDivElement;
        if (target.id === 'bgModal' || e.currentTarget.id === 'btnClose') {
            setIsOpen(false);
            if (navigate) navigate('/home');
        }
    };

    return (
        <Portal className={styles.portal}>
            <div id="bgModal" className={styles.bg} onMouseDown={handleCloseModal}>
                <div style={{ height, width, top, right, bottom, left }} className={cn(styles.modal, className)}>
                    {addBtnClose && (
                        <button id="btnClose" onClick={handleCloseModal} className={styles.btnClose}>
                            <Cross className={styles.iconCross} />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </Portal>
    );
};
