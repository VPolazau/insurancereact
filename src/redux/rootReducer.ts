import { combineReducers } from '@reduxjs/toolkit';

import { authSlice, userSlice, registrationSlice, passwordRestoreSlice } from './slices';
import { myInsuranceApi } from './api/myInsuranceApi';

export const rootReducer = combineReducers({
    [myInsuranceApi.reducerPath]: myInsuranceApi.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
    registration: registrationSlice.reducer,
    passwordRestore: passwordRestoreSlice.reducer,
});
