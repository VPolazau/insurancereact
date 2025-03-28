import {
    IRegistrationResponse,
    IRegistrationData,
    IEmailConfirmationRequest,
    IEmailConfirmationResponse,
} from '../typesApi';
import { myInsuranceApi } from '../../api/myInsuranceApi';
import { ENDPOINTS } from '../../endpoints/endpoints';

export const registrationApi = myInsuranceApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<IRegistrationResponse, IRegistrationData>({
            query: (registrationData) => ({
                url: ENDPOINTS.registration.newUser,
                method: 'POST',
                body: registrationData,
            }),
        }),
        confirmEmail: builder.mutation<IEmailConfirmationResponse, IEmailConfirmationRequest>({
            query: (data) => ({
                url: ENDPOINTS.registration.confirmEmail,
                method: 'PATCH',
                params: data,
            }),
        }),
        checkUserRegistration: builder.query<{ registered: boolean }, { mobilePhone: string }>({
            query: (params) => `/registration?mobilePhone=${encodeURIComponent(params.mobilePhone)}`,
        }),
    }),
});

export const { useRegisterMutation, useConfirmEmailMutation, useCheckUserRegistrationQuery } = registrationApi;
