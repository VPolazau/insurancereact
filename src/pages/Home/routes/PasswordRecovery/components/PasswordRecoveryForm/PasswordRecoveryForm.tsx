import { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import letter from '../../../../../../assets/img/letter.svg';
import { Input, Typography, Button, ModalWindow } from '../../../../../../components';
import { useCreateRequestByEmailMutation } from '../../../../../../redux/injectsApi';
import { IEmailData, IEmailRequest, IRestorePasswordError } from '../../../../../../redux/injectsApi/typesApi';

import {
    PASSWORD_RECOVERY_ERRORS,
    PASSWORD_RECOVERY_ERROR_MESSAGES,
    PASSWORD_RECOVERY_SUCCESS_MESSAGES,
} from './const';
import { validationSchema } from './yupSchema';

import styles from './styles.module.css';

const initialValues = {
    email: '',
};

export const PasswordRecoveryForm = () => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [createRestore] = useCreateRequestByEmailMutation();
    const navigate = useNavigate();

    const handleSubmit = async (values: IEmailRequest) => {
        setIsError(false);
        await createRestore(values)
            .unwrap()
            .then((response: IEmailData) => {
                if (response.message === PASSWORD_RECOVERY_SUCCESS_MESSAGES.REQUEST_ACCEPTED) {
                    setIsValidEmail(true);
                }
            })
            .catch((error: IRestorePasswordError) => {
                setIsError(true);
                const errorMessage = error.data.errorMessage[0];

                if (errorMessage === PASSWORD_RECOVERY_ERRORS.EMAIL_IS_NOT_CONFIRMED) {
                    setErrorMessage(PASSWORD_RECOVERY_ERROR_MESSAGES.EMAIL_IS_NOT_CONFIRMED);
                }
                if (errorMessage === PASSWORD_RECOVERY_ERRORS.USER_IS_NOT_FOUND) {
                    setErrorMessage(PASSWORD_RECOVERY_ERROR_MESSAGES.USER_IS_NOT_FOUND);
                }
            });
    };

    return (
        <div className={styles.recoveryBlock}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ isValid, dirty }) => (
                    <Form className={styles.form}>
                        <Typography variant="h2" className={styles.title}>
                            Восстановление пароля
                        </Typography>
                        <Input name="email" label="E-mail" errors={isError ? [errorMessage] : undefined} />
                        <Button variant="primary" className={styles.button} disabled={!isValid || !dirty}>
                            Восстановить пароль
                        </Button>
                    </Form>
                )}
            </Formik>
            {isValidEmail && (
                <ModalWindow
                    setIsOpen={setIsValidEmail}
                    addBtnClose={true}
                    className={styles.modalLetter}
                    navigate={() => navigate('/home')}
                >
                    <div className={styles.modalContent}>
                        <img alt="success" src={letter} />
                        <Typography variant="h3">
                            Для восстановления пароля перейдите по ссылке в письме, отправленном на Вашу электронную
                            почту. Не забудьте проверить папку Спам
                        </Typography>
                    </div>
                </ModalWindow>
            )}
        </div>
    );
};
