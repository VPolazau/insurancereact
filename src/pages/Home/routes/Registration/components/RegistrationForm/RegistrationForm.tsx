import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCheckUserRegistrationQuery, useRegisterMutation } from '../../../../../../redux/injectsApi';
import { IRegistrationError, IRegistrationResponse } from '../../../../../../redux/injectsApi/typesApi';
import { Typography, Button, ModalWindow } from '../../../../../../components';
import { RegistrationFormStepIndicator } from '../RegistrationFormStepIndicator';
import { RegistrationFormTextInput } from '../RegistrationFormTextInput';
import { RegistrationFormBirthdayInput } from '../RegistrationFormBirthdayInput';
import { RegistrationFormPhoneInput } from '../RegistrationFormPhoneInput';
import { RegistrationFormPasswordInput } from '../RegistrationFormPasswordInput';
import { RegistrationFormCheckboxInput } from '../RegistrationFormCheckboxInput';
import { registrationSucceeded } from '../../../../../../redux/slices';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import success from '../../../../../../assets/img/success.svg';

import { REGISTRATION_ERRORS } from './const';

import { withFormikValidation, IFormikProps } from './withFormikValidation';
import styles from './styles.module.css';

const RegistrationForm: React.FC<IFormikProps> = ({ formik }) => {
    const dispatch = useAppDispatch();
    const [step, setStep] = useState<number>(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [skipPhoneCheck, setSkipPhoneCheck] = useState(true);

    const navigate = useNavigate();

    const [register] = useRegisterMutation();

    const isStep1Valid = () => {
        const { firstName, lastName, birthday, mobilePhone } = formik.values;
        const { errors } = formik;

        return (
            firstName &&
            lastName &&
            birthday &&
            mobilePhone &&
            !errors.firstName &&
            !errors.lastName &&
            !errors.middleName &&
            !errors.birthday &&
            !errors.mobilePhone
        );
    };

    const isStep2Valid = () => {
        const { username, email, password, confirmPassword } = formik.values;
        const { errors } = formik;

        return (
            username &&
            email &&
            password &&
            confirmPassword &&
            formik.values.agreeRules &&
            !errors.username &&
            !errors.email &&
            !errors.password &&
            !errors.confirmPassword
        );
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleRouteBack = () => {
        navigate('/home/authorization');
    };

    const { data: checkedPhone, isSuccess: isPhoneCheckSuccess } = useCheckUserRegistrationQuery(
        {
            mobilePhone: formik.values.mobilePhone,
        },
        { skip: skipPhoneCheck }
    );

    const handleContinue = () => {
        if (formik.values.mobilePhone.length === 12) {
            setSkipPhoneCheck(false);
        }
    };

    useEffect(() => {
        const checkPhone = async () => {
            if (checkedPhone?.registered) {
                formik.setErrors({ mobilePhone: REGISTRATION_ERRORS.PHONE });
            } else if (step === 1 && isStep1Valid()) {
                await formik.setErrors({ mobilePhone: '' });
                await formik.setTouched({});
                setStep(2);
            }
            setSkipPhoneCheck(true);
        };

        if (isPhoneCheckSuccess) checkPhone();
        // eslint-disable-next-line
    }, [checkedPhone]);

    const handleSubmit = async () => {
        formik.setErrors({});
        setModalIsOpen(false);

        const registrationData = {
            password: formik.values.password,
            mobilePhone: formik.values.mobilePhone,
            username: formik.values.username,
            email: formik.values.email,
            firstName: formik.values.firstName,
            lastName: formik.values.lastName,
            ...(formik.values.middleName && { middleName: formik.values.middleName }),
            birthday: formik.values.birthday,
        };

        await register(registrationData)
            .unwrap()
            .then((response: IRegistrationResponse) => {
                dispatch(registrationSucceeded(response));
                setModalIsOpen(true);
                formik.resetForm();
                setTimeout(() => {
                    navigate('/account');
                }, 2000);
            })
            .catch((error: IRegistrationError) => {
                if (error.status === 409) {
                    const messageFromBackend = error.data.errorMessage[0] ?? '';

                    if (messageFromBackend.includes('username')) {
                        formik.setErrors({ username: REGISTRATION_ERRORS.USERNAME });
                    }
                    if (messageFromBackend.includes('email')) {
                        formik.setErrors({ email: REGISTRATION_ERRORS.EMAIL });
                    }

                    setModalIsOpen(false);
                }
            });
    };

    return (
        <form className={styles.registrationForm} onSubmit={formik.handleSubmit}>
            <div className={styles.registrationFormContainer}>
                <Typography variant="h2" className={styles.registrationTitle}>
                    Регистрация
                </Typography>

                <RegistrationFormStepIndicator step={step} />

                {step === 1 && (
                    <>
                        <RegistrationFormTextInput label="Фамилия *" name="lastName" formik={formik} />
                        <RegistrationFormTextInput label="Имя *" name="firstName" formik={formik} />
                        <RegistrationFormTextInput label="Отчество" name="middleName" formik={formik} />
                        <RegistrationFormBirthdayInput label="Дата рождения *" name="birthday" formik={formik} />
                        <RegistrationFormPhoneInput label="Телефон *" name="mobilePhone" formik={formik} />
                        <div className={styles.buttonContainer}>
                            <Button variant="primary" onClick={handleContinue} disabled={!isStep1Valid()}>
                                Продолжить
                            </Button>
                            <Button variant="secondaryM" onClick={handleRouteBack}>
                                Назад
                            </Button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <RegistrationFormTextInput label="Адрес электронной почты *" name="email" formik={formik} />
                        <RegistrationFormTextInput label="Логин *" name="username" formik={formik} />
                        <RegistrationFormPasswordInput label="Пароль *" name="password" formik={formik} />
                        <RegistrationFormPasswordInput
                            label="Повторите пароль *"
                            name="confirmPassword"
                            formik={formik}
                        />
                        <RegistrationFormCheckboxInput name="agreeRules" formik={formik} />
                        <div className={styles.buttonContainer}>
                            <Button variant="primary" disabled={!isStep2Valid()} onClick={handleSubmit}>
                                Зарегистрироваться
                            </Button>
                            <Button variant="secondaryM" onClick={handleBack}>
                                Назад
                            </Button>
                        </div>
                    </>
                )}
            </div>
            {modalIsOpen && (
                <ModalWindow setIsOpen={setModalIsOpen} addBtnClose={true} className={styles.modalAnswer}>
                    <>
                        <img alt="success" src={success} />
                        <Typography variant="h3">Вы успешно зарегистрировались</Typography>
                    </>
                </ModalWindow>
            )}
        </form>
    );
};

export const RegistrationFormWithValidation = withFormikValidation(RegistrationForm);
