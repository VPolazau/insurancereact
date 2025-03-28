import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { Mutex } from 'async-mutex';

import { RootState } from '../store';
import { getCookie } from '../../utils/cookieHandlers';
import { IAuthorizationResponse } from '../injectsApi/typesApi';
import { removeAccessToken, loggedOut, setAuth } from '../slices';

const BASE_URL = 'https://myinsurance-dev.ru:9000/api/v1';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers, api) {
        const deviceId = getCookie('fpHash');
        if (deviceId) headers.set('x_device_id', deviceId);
        const { accessToken, refreshToken } = (api.getState() as RootState).auth;
        headers.set('authorization', `Bearer ${accessToken || refreshToken}`);
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 403) {
        api.dispatch(removeAccessToken());
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQuery('/refreshtoken', api, extraOptions);
                if (refreshResult.data) {
                    api.dispatch(setAuth(refreshResult.data as IAuthorizationResponse));

                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(loggedOut());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const myInsuranceApi = createApi({
    reducerPath: 'myInsuranceApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
