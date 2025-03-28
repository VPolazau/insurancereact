import React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Typography } from '../Typography';
import { Tags } from '../Tags';
import { LeftArrow } from '../../assets/icons';

import styles from './styles.module.css';

interface ILayout {
    title: string;
    isBtnBack?: boolean;
    tags?: { tag: string; path: string; count?: number }[] | null;
    className?: string;
    children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ title, isBtnBack = false, className, children, tags }) => {
    const navigate = useNavigate();
    let minHeight = '98px';

    const handleBtnBack = () => {
        navigate(-1);
    };

    if (isBtnBack || tags) minHeight = '124px';

    return (
        <div className={styles.content}>
            <div style={{ minHeight }} className={styles.header}>
                <Typography variant="h2">{title}</Typography>
                {isBtnBack && (
                    <button onClick={handleBtnBack} className={styles.btnBack}>
                        <LeftArrow viewBox="0 0 8 14" className={styles.iconArrow} />
                    </button>
                )}
                {tags && (
                    <div className={styles.tagsList}>
                        <Tags list={tags} />
                    </div>
                )}
            </div>
            <div className={cn(styles.body, className)} data-testid="LayoutContent">
                {children}
            </div>
        </div>
    );
};
