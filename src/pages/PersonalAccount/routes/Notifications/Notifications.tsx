import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

import { Layout } from '../../../../components';

import { selectNotificationById } from '../../../../redux/slices/user';

export const Notifications = () => {
    const notificationsTags = [
        { tag: 'Уведомления', path: '/account/notifications/messages' },
        { tag: 'Новости', path: '/in-Progress', disabled: true },
    ];
    const { id } = useParams();

    const notification = useSelector(selectNotificationById(id ?? ''));
    const title = notification ? `Ответ на заявку "${notification?.type}"` : 'Уведомления';
    const tags = notification ? notificationsTags : null;
    const isButtonBackEnable = Boolean(id);

    return (
        <Layout title={title} isBtnBack={isButtonBackEnable} tags={tags}>
            <Outlet />
        </Layout>
    );
};
