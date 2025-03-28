import { RootState } from './store';

export const accessToken = (state: RootState) => state.auth.login.accessToken;

export const user = (state: RootState) => state.auth.user.userData;
