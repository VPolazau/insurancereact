import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type RestoreState = {
    link: string;
    isLoading: boolean;
    error: string;
};

const initialState: RestoreState = {
    link: '',
    isLoading: false,
    error: '',
};

export const passwordRestoreSlice = createSlice({
    name: 'passwordRestore',
    initialState,
    reducers: {
        passwordRestoreFetching(state) {
            state.isLoading = true;
        },
        passwordRestoreFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.link = action.payload;
        },
        passwordRestoreFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
