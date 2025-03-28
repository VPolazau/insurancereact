import { IUserResponse } from '../../injectsApi/typesApi';

export interface INotificationMessage {
    id: string;
    title: string;
    isRead: boolean;
    date: string;
    type: string;
    message: string;
}

export interface INotificationsMessages {
    messages: INotificationMessage[];
}

export interface IUserState {
    userData: IUserResponse;
    agreeWithCookies: boolean;
    notifications: INotificationMessage[];
}
