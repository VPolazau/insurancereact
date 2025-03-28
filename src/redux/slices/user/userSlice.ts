import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { NOTIFICATIONS } from '../../../utils/constants';
import { IUserResponse } from '../../injectsApi/typesApi';

import { IUserState } from './types';

const initialState: IUserState = {
    userData: {
        userId: '',
        username: '',
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        mobilePhone: '',
        birthday: '',
        emailNotification: false,
        pushNotification: false,
        tgNotification: false,
        registrationDate: '',
    },
    agreeWithCookies: false,
    notifications: NOTIFICATIONS,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserResponse>) => {
            state.userData = action.payload;
        },
        setAgreeWithCookies: (state, action: PayloadAction<boolean>) => {
            state.agreeWithCookies = action.payload;
        },
        markAsReadNotification: (state, action: PayloadAction<string>) => {
            const notification = state.notifications.find((notification) => notification.id === action.payload);
            if (notification) notification.isRead = true;
        },
        deleteNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
        },
    },
});

export const { setUserData, setAgreeWithCookies, markAsReadNotification, deleteNotification } = userSlice.actions;

export const selectAgreementWithCookies = (state: RootState) => state.user.agreeWithCookies;

export const selectNotifications = (state: RootState) => state.user.notifications;
export const selectUnreadNotificationsCount = (state: RootState) =>
    state.user.notifications.filter((notification) => !notification.isRead).length;
export const selectNotificationById = (id: string) => (state: RootState) =>
    state.user.notifications.find((notification) => notification.id === id);

export const selectUserData = (state: RootState) => state.user.userData;
