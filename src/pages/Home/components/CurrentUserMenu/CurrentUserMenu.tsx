import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Typography } from '../../../../components';
import { ArrowDown, ArrowUp } from '../../../../assets/icons';
import { USER_DROP_LINKS } from '../../../../utils/constants';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { loggedOut } from '../../../../redux/slices';
import { useGetUserQuery } from '../../../../redux/injectsApi/user';
import { useAuth } from '../../../../shared/hooks';

import styles from './styles.module.css';

export const CurrentUserMenu = () => {
    const dispatch = useAppDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuth = useAuth();

    const { data } = useGetUserQuery(undefined, {
        skip: !isAuth,
    });

    const handleLogoutUser = (value: string) => {
        if (value === 'Выход') {
            dispatch(loggedOut());
        }
    };
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const clickedElement = event.target as HTMLElement;

        if (
            clickedElement &&
            clickedElement.id !== 'userMenu' &&
            clickedElement.id !== 'userName' &&
            !clickedElement.closest('svg')?.id.startsWith('arrow')
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.content}>
            <button
                id="userMenu"
                className={cn(styles.userButton, { [styles.active]: isMenuOpen })}
                onClick={handleClick}
            >
                <Typography variant="small" id="userName" className={styles.userName}>
                    {data?.firstName} {data?.lastName}
                </Typography>
                {isMenuOpen ? (
                    <ArrowUp viewBox="0 0 16 16" id="arrowUp" className={styles.arrow} />
                ) : (
                    <ArrowDown viewBox="0 0 16 16" id="arrowDown" className={styles.arrow} />
                )}
            </button>
            {isMenuOpen && (
                <div className={styles.dropMenuList}>
                    {USER_DROP_LINKS.dropNavLinks.map(({ dropLinkValue, dropLinkPath }) => (
                        <NavLink
                            onClick={() => handleLogoutUser(dropLinkValue)}
                            key={dropLinkValue}
                            to={dropLinkPath}
                            className={cn(styles.dropDownText)}
                        >
                            <Typography variant="medium">{dropLinkValue}</Typography>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};
