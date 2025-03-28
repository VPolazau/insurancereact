import { IEmailData, IEmailRequest, IPasswordData, IPasswordRequest } from '../typesApi';
import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';
export const passwordRestoreController = myInsuranceApi.injectEndpoints({
    endpoints: (builder) => ({
        createRequestByEmail: builder.mutation<IEmailData, IEmailRequest>({
            query(body) {
                return {
                    url: ENDPOINTS.password.forgotPassword,
                    method: 'POST',
                    body: body,
                };
            },
        }),
        updatePasswordRequest: builder.mutation<IPasswordData, IPasswordRequest>({
            query(body) {
                return {
                    url: `${ENDPOINTS.password.resetPassword}?secret_code=${body.secretCode}`,
                    method: 'POST',
                    body: { password: body.password },
                };
            },
        }),
    }),
});

export const { useCreateRequestByEmailMutation, useUpdatePasswordRequestMutation } = passwordRestoreController;
