import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { IEmailNotificationData, IEmailNotificationRequest, IPushData, IPushRequest } from '../typesApi';

export const notificationsApi = myInsuranceApi.injectEndpoints({
    endpoints: (builder) => ({
        updatePushNotifications: builder.mutation<IPushData, IPushRequest>({
            query(body) {
                return {
                    url: ENDPOINTS.notification.push,
                    method: 'PATCH',
                    body,
                };
            },
        }),
        updateEmailNotifivations: builder.mutation<IEmailNotificationData, IEmailNotificationRequest>({
            query(body) {
                return {
                    url: ENDPOINTS.notification.email,
                    method: 'PATCH',
                    body,
                };
            },
        }),
    }),
});

export const { useUpdatePushNotificationsMutation, useUpdateEmailNotifivationsMutation } = notificationsApi;
