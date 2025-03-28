import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { IRegistrationData, IRegistrationResponse } from '../../injectsApi/typesApi';
import { useRegisterMutation } from '../../injectsApi';

interface IRegistrationState {
    registrationData: IRegistrationData | null;
    registrationResponse: IRegistrationResponse | null;
    isRegistered: boolean;
    isLoading: boolean;
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: IRegistrationState = {
    registrationData: null,
    registrationResponse: null,
    isRegistered: false,
    isLoading: false,
    error: null,
    accessToken: null,
    refreshToken: null,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationData: (state, action: PayloadAction<IRegistrationData>) => {
            state.registrationData = action.payload;
        },
        registrationRequested: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        registrationSucceeded: (state, action: PayloadAction<IRegistrationResponse>) => {
            state.isLoading = false;
            state.isRegistered = true;
            state.registrationResponse = action.payload;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        registrationFailed: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setRegistrationData, registrationRequested, registrationSucceeded, registrationFailed } =
    registrationSlice.actions;

export const registerUser = (registrationData: IRegistrationData) => async (dispatch: Dispatch) => {
    try {
        dispatch(registrationRequested());

        const [triggerRegister] = useRegisterMutation();

        const result = await triggerRegister(registrationData);

        if ('error' in result) {
            dispatch(registrationFailed('An error occurred'));
        } else {
            const registrationResponse = result.data;
            dispatch(registrationSucceeded(registrationResponse));
        }
    } catch (error) {
        dispatch(registrationFailed('An error occurred'));
    }
};
