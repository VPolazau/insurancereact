import React from 'react';
import { useFormik, FormikHelpers } from 'formik';

import { validationSchema } from './yupSchema';

export interface IFormValues {
    firstName: string;
    lastName: string;
    middleName: string;
    birthday: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobilePhone: string;
    agreeRules: boolean;
}

export interface IFormikProps {
    formik: ReturnType<typeof useFormik>;
}

export const withFormikValidation = <P extends IFormikProps>(Component: React.ComponentType<P>) => {
    return function WithFormikValidationComponent(props: Omit<P, keyof IFormikProps>) {
        const formik = useFormik<IFormValues>({
            initialValues: {
                firstName: '',
                lastName: '',
                middleName: '',
                birthday: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                mobilePhone: '',
                agreeRules: false,
            },
            validateOnChange: true,
            validateOnBlur: true,
            validationSchema: validationSchema,
            onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => {
                // TODO: добавить обработку сабмита
            },
        });

        return <Component {...(props as P)} formik={formik} />;
    };
};
