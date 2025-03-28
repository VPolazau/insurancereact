import { IAuthorizationResponse, IAuthorizationData } from '../typesApi';
import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';

export const loginApi = myInsuranceApi.injectEndpoints({
    endpoints: (builder) => ({
        authorization: builder.mutation<IAuthorizationResponse, IAuthorizationData>({
            query: (loginData) => {
                return {
                    url: ENDPOINTS.login,
                    method: 'POST',
                    body: loginData,
                };
            },
        }),
    }),
});

export const { useAuthorizationMutation } = loginApi;
