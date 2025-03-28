import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';

import { RegistrationFormTextInput } from '../RegistrationFormTextInput';

import styles from './styles.module.css';

interface IProps {
    label: string;
    formik: ReturnType<typeof useFormik>;
    name: string;
}

export const RegistrationFormPhoneInput: React.FC<IProps> = ({ label, formik, ...props }) => {
    const [formattedPhoneNumberValue, setFormattedPhoneNumberValue] = useState('');

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputVal = event.target.value;
            const phoneNumber = inputVal.replace(/\D/g, '').substring(0, 11);

            let formattedPhoneNumber = phoneNumber;
            if (phoneNumber.length === 1 && phoneNumber !== '7') {
                formattedPhoneNumber = '+7 (' + phoneNumber;
            } else if (phoneNumber.length > 1 && phoneNumber.length <= 4) {
                formattedPhoneNumber = '+7 (' + phoneNumber.substring(1, 4);
            } else if (phoneNumber.length > 4 && phoneNumber.length <= 7) {
                formattedPhoneNumber = '+7 (' + phoneNumber.substring(1, 4) + ') ' + phoneNumber.substring(4, 7);
            } else if (phoneNumber.length > 7 && phoneNumber.length <= 9) {
                formattedPhoneNumber =
                    '+7 (' +
                    phoneNumber.substring(1, 4) +
                    ') ' +
                    phoneNumber.substring(4, 7) +
                    '-' +
                    phoneNumber.substring(7, 9);
            } else if (phoneNumber.length > 9) {
                formattedPhoneNumber =
                    '+7 (' +
                    phoneNumber.substring(1, 4) +
                    ') ' +
                    phoneNumber.substring(4, 7) +
                    '-' +
                    phoneNumber.substring(7, 9) +
                    '-' +
                    phoneNumber.substring(9, 11);
            }

            // номер для отображения в форме
            setFormattedPhoneNumberValue(formattedPhoneNumber);
            // реальное значение которе пойдет в базу
            formik.setFieldValue(props.name, '+7' + phoneNumber.substring(1, 11));
        },
        [formik, props.name]
    );

    return (
        <div className={styles.inputWrapper}>
            <RegistrationFormTextInput
                label={label}
                formik={formik}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={formattedPhoneNumberValue}
                className={`${styles.inputField} ${
                    formik.touched[props.name] && formik.errors[props.name] ? styles.error : ''
                }`}
                {...props}
            />
        </div>
    );
};
