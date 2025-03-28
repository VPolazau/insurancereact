import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

interface IIconButton {
    size?: number;
    onClick: (e: React.MouseEvent) => void;
    icon: string;
    className?: string;
    alt?: string;
}

export const IconButton = ({ size = 46, onClick, icon, className, alt = 'iconButton' }: IIconButton) => {
    return (
        <button className={cn(styles.iconButtonBasic, className)} data-testid="iconButtonComponent" onClick={onClick}>
            <img style={{ height: size + 'px' }} src={icon} alt={alt} />
        </button>
    );
};
