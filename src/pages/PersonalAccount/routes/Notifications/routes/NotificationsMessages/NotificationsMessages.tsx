import { useSelector } from 'react-redux';

import { selectNotifications } from '../../../../../../redux/slices/user';
import { DataPlaceholder } from '../../../../../../components';

import { NotificationMessage } from './components';

import styles from './styles.module.css';

export const NotificationsMessages = () => {
    const messages = useSelector(selectNotifications);
    return messages.length > 0 ? (
        <div className={styles.messages}>
            {messages.map((message) => (
                <NotificationMessage key={message.id} {...message} />
            ))}
        </div>
    ) : (
        <DataPlaceholder />
    );
};
