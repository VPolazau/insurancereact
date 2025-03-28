import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { Typography } from '../Typography';

import { selectUnreadNotificationsCount } from '../../redux/slices/user';

import styles from './styles.module.css';

interface INotificationCount {
    top?: string;
    left?: string;
    count: number;
    className?: string;
    isActiveLink?: boolean;
}
export const NotificationCount: React.FC<INotificationCount> = ({
    count,
    className,
    top,
    left,
    isActiveLink = false,
}) => {
    const notificationCount = useSelector(selectUnreadNotificationsCount);
    const displayedCount = notificationCount > 99 ? '99+' : notificationCount;

    if (count === 0) return null;

    return (
        <div
            className={cn(styles.notificationCountBasic, className)}
            style={{ top, left, backgroundColor: isActiveLink ? '#FAFBFA' : '#1EB159' }}
        >
            <Typography variant="h5" style={{ color: isActiveLink ? '#1EB159' : '#FCFFFE' }}>
                {displayedCount}
            </Typography>
        </div>
    );
};
