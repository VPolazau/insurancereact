import { ILogoutResponse } from '../typesApi';
import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';

export const logoutApi = myInsuranceApi.injectEndpoints({
    endpoints: (build) => ({
        logout: build.mutation<ILogoutResponse, void>({
            query: () => {
                return {
                    url: ENDPOINTS.logout,
                    method: 'DELETE',
                };
            },
        }),
    }),
});

export const { useLogoutMutation } = logoutApi;
