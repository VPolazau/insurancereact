import { Typography } from '../../../../../../../../components';

import styles from './styles.module.css';

interface INotificationDate {
    date: string;
    isRead?: boolean;
}

export const NotificationDate = ({ date, isRead = true }: INotificationDate) => {
    return (
        <Typography variant="emphasis" className={!isRead ? styles.unread : ''}>
            {date}
        </Typography>
    );
};
