import { Link } from 'react-router-dom';

import { Typography } from '../../../../components';
import { NotificationDate } from '../../routes/Notifications/routes/NotificationsMessages/components/NotificationDate';

import styles from './styles.module.css';

interface INotification {
    title: string;
    isRead: boolean;
    date: string;
    id: string;
    onClick?: () => void;
}

export const NotificationTitle: React.FC<INotification> = ({ title, isRead, date, id, onClick }) => {
    return (
        <div>
            <Link to={`notifications/messages/${id}`} onClick={onClick}>
                <Typography variant="medium" className={styles.link}>
                    {title}
                </Typography>
            </Link>
            <NotificationDate date={date} isRead={isRead} />
        </div>
    );
};
