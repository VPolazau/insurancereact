import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { Bell, Logo, Logout, Profile, PoliciesIcon, SettingsIcon } from '../../../../assets/icons';
import { selectUnreadNotificationsCount } from '../../../../redux/slices/user';
import { Typography, NotificationCount } from '../../../../components';
import { useLogoutMutation } from '../../../../redux/injectsApi';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { loggedOut } from '../../../../redux/slices';

import styles from './styles.module.css';

export const Aside = () => {
    const navigate = useNavigate();
    const [logoutUser] = useLogoutMutation();
    const dispatch = useAppDispatch();
    const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);
    const handleLogoutUser = () => {
        logoutUser();
        dispatch(loggedOut());
    };
    const handleLogoClick = () => {
        navigate('/');
    };

    const activeLink = ({ isActive }: { isActive: boolean }) =>
        isActive ? cn(styles.asideLink, styles.asideLinkActive) : styles.asideLink;

    return (
        <aside className={styles.aside}>
            <button className={styles.asideLogo} onClick={handleLogoClick}>
                <Logo viewBox="0 0 150 46" className={styles.logoIcon} />
            </button>
            <nav className={styles.asideNav}>
                <NavLink to="policies" className={activeLink}>
                    <PoliciesIcon className={styles.asideIconFill} />
                    <Typography variant="h4" className={styles.asideText}>
                        Полисы
                    </Typography>
                </NavLink>
                <NavLink to="profile" className={activeLink}>
                    <Profile viewBox="10 7 24 24" className={styles.asideIconStroke} />
                    <Typography variant="h4" className={styles.asideText}>
                        Мой профиль
                    </Typography>
                </NavLink>
                <NavLink to="notifications" className={activeLink}>
                    {({ isActive }) => (
                        <>
                            <Bell viewBox="-1 -1 24 24" className={styles.asideIconColor} />
                            <Typography variant="h4" className={styles.asideText}>
                                Уведомления
                            </Typography>
                            {unreadNotificationsCount > 0 && (
                                <NotificationCount
                                    count={unreadNotificationsCount}
                                    className={styles.asideNotification}
                                    isActiveLink={isActive}
                                />
                            )}
                        </>
                    )}
                </NavLink>
            </nav>
            <hr className={styles.asideDivider} />
            <nav className={styles.asideNav}>
                <NavLink to="settings" className={activeLink}>
                    <SettingsIcon className={styles.asideIconFill} />
                    <Typography variant="h4" className={styles.asideText}>
                        Настройки
                    </Typography>
                </NavLink>
                <NavLink to="/home" className={activeLink}>
                    <Logout viewBox="0 0 20 20" className={cn(styles.iconLogout, styles.asideIconFill)} />
                    <Typography onClick={handleLogoutUser} variant="h4" className={styles.asideText}>
                        Выход
                    </Typography>
                </NavLink>
            </nav>
        </aside>
    );
};
