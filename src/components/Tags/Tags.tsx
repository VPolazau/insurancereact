import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Typography } from '../Typography';
import { NotificationCount } from '../NotificationCount';

import styles from './styles.module.css';

interface ITags {
    list?: { tag: string; path: string; count?: number; disabled?: boolean }[];
}
export const Tags: React.FC<ITags> = ({ list }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, disabled = false) => {
        if (disabled) e.preventDefault();
    };

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {list?.map(({ tag, path, count, disabled }) => (
                <NavLink
                    onClick={(e) => handleClick(e, disabled)}
                    key={path}
                    to={path}
                    className={({ isActive }) => (isActive ? cn(styles.tagLink, styles.tagActiveLink) : styles.tagLink)}
                >
                    <Typography variant="h4" className={disabled ? styles.disabled : ''}>
                        {tag}
                    </Typography>
                    {count && <NotificationCount count={count} className={styles.count} />}
                </NavLink>
            ))}
        </>
    );
};
