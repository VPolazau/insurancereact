import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { IUserResponse } from '../typesApi';

export const userApi = myInsuranceApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<IUserResponse, void>({
            query: () => ({
                url: ENDPOINTS.user,
            }),
        }),
    }),
});

export const { useGetUserQuery } = userApi;
