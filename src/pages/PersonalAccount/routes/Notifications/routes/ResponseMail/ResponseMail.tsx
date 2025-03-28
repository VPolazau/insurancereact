import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { deleteNotification, selectNotificationById } from '../../../../../../redux/slices/user';
import { Card, CardBody, Typography } from '../../../../../../components';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import { NotificationDate } from '../NotificationsMessages';
import { DeleteBtn } from '../../components';

import styles from './styles.module.css';

export const ResponseMail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const notification = useSelector(selectNotificationById(id ?? ''));

    if (!id || !notification) return <div>Не нашли ваше сообщение</div>; //TODO: сделать обработку/компонент-заглушку если человек ввел адрес с id, которого нету

    const onDelete = () => {
        //TODO: сделать запрос на бэк
        dispatch(deleteNotification(id));
    };

    return (
        <Card className={styles.card}>
            <CardBody className={styles.message}>
                <NotificationDate date={notification?.date || ''} />
                <Typography variant="medium">{notification?.message}</Typography>
                <Card className={styles.company}>
                    <CardBody className={styles.data}>
                        <Typography variant="h3">Реквизиты для оплаты:</Typography>
                        <div>
                            <Typography variant="small">Название компании</Typography>
                            <Typography variant="h4">СПАО «My Insurance»</Typography>
                        </div>
                        <div>
                            <Typography variant="small">Расчетный счет</Typography>
                            <Typography variant="h4">407049170732898765291</Typography>
                        </div>
                        <div>
                            <Typography variant="small">БИК</Typography>
                            <Typography variant="h4">011111111</Typography>
                        </div>
                        <div>
                            <Typography variant="small">ИНН</Typography>
                            <Typography variant="h4">7711111111</Typography>
                        </div>
                    </CardBody>
                </Card>
                <div className={styles.cardFooter}>
                    <Typography variant="medium">С уважением, команда MyInsurance</Typography>
                    <DeleteBtn onSubmit={onDelete} />
                </div>
            </CardBody>
        </Card>
    );
};
