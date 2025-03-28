import { Link } from 'react-router-dom';

import { Card, CardBody, CardHeader, Typography } from '../../../../../../../../components';
import { DeleteBtn } from '../../../../components';
import { NotificationDate } from '../../components';

import { INotificationMessage } from '../../../../../../../../redux/slices/user/types';

import { useAppDispatch } from '../../../../../../../../redux/hooks/hooks';
import { deleteNotification, markAsReadNotification } from '../../../../../../../../redux/slices/user';

import styles from './styles.module.css';

const NotificationMessage = (message: INotificationMessage) => {
    const dispatch = useAppDispatch();
    const markAsRead = () => {
        //TODO: сделать запрос на бэк
        dispatch(markAsReadNotification(message.id));
    };

    const onDelete = () => {
        //TODO: сделать запрос на бэк
        dispatch(deleteNotification(message.id));
    };

    return (
        <Card className={styles.card}>
            <CardHeader>
                <Typography variant="h3">{message.title}</Typography>
            </CardHeader>
            <CardBody className={styles.message}>
                <div className={styles.messageHeader}>
                    <NotificationDate date={message.date} isRead={message.isRead} />
                    <DeleteBtn onSubmit={onDelete} />
                </div>
                <Typography variant="h5" className={styles.text}>
                    {message.message}
                </Typography>
                <Link to={`${message.id}`} className={styles.btnMore}>
                    <Typography className={styles.btnText} variant="h5">
                        Подробнее
                    </Typography>
                </Link>
                <button className={styles.readBtn} onClick={markAsRead}>
                    <Typography className={styles.btn} variant="h5">
                        Отметить как прочитанное
                    </Typography>
                </button>
            </CardBody>
        </Card>
    );
};

export default NotificationMessage;
