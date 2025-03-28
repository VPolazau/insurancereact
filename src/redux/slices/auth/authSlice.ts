import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export interface AuthState {
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    accessToken: '',
    refreshToken: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        loggedOut: () => initialState,
        removeAccessToken: (state) => {
            state.accessToken = '';
        },
    },
});

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const { setAuth, loggedOut, removeAccessToken } = authSlice.actions;
