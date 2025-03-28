import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import { Typography } from '../../../../components';

import styles from './styles.module.css';

interface INavTag {
    tags: { tag: string; path: string; count: number }[];
}
const NavTags: React.FC<INavTag> = ({ tags }) => {
    return (
        <div className={styles.tagWrapper}>
            {tags.map(({ tag, path, count }) => (
                <NavLink
                    key={count}
                    to={path}
                    className={({ isActive }) => (isActive ? cn(styles.tag, styles.activeTag) : styles.tag)}
                >
                    <Typography className={styles.tagNum} variant="medium">
                        {count}
                    </Typography>
                    <Typography className={styles.tagName} variant="medium">
                        {tag}
                    </Typography>
                </NavLink>
            ))}
        </div>
    );
};

export default NavTags;
