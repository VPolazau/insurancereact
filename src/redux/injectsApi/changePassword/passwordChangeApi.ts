import { IPasswordChangeResponse, IChangePasswordProps } from '../typesApi';
import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';

export const passwordChangeApi = myInsuranceApi.injectEndpoints({
    endpoints: (build) => ({
        changePassword: build.mutation<IPasswordChangeResponse, IChangePasswordProps>({
            query: (body) => {
                return {
                    url: ENDPOINTS.password.changePassword,
                    method: 'PATCH',
                    body,
                };
            },
        }),
    }),
});

export const { useChangePasswordMutation } = passwordChangeApi;
