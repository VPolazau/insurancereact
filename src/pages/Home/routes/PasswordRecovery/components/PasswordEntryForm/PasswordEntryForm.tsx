import { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Input, Typography, Button } from '../../../../../../components';
import { ModalWindowPassword } from '../../../../../../components/ModalWindowPassword';
import { EyeHide, EyeShow } from '../../../../../../assets/icons';
import { IPasswordChangeResponse } from '../../../../../../redux/injectsApi/typesApi';
import { useUpdatePasswordRequestMutation } from '../../../../../../redux/injectsApi';

import { PASSWORD_UPDATE_SUCCESS_MESSAGES } from './const';
import { validationSchema } from './yupSchema';
import styles from './styles.module.css';

interface IInitialValuesProps {
    passwordNew: string;
    passwordRepeat: string;
}
const initialValues: IInitialValuesProps = {
    passwordNew: '',
    passwordRepeat: '',
};

export const PasswordEntryForm = () => {
    const [isPasswordChangedSuccessfully, setIsPasswordChangedSuccessfully] = useState(false);
    const [isPasswordChangedWithError, setIsPasswordChangedWithError] = useState(false);

    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

    const [createNewPassword] = useUpdatePasswordRequestMutation();

    const secretCode = new URLSearchParams(window.location.search).get('secret_code');
    const navigate = useNavigate();

    const DisplayIcon = showPasswordNew ? EyeHide : EyeShow;
    const DisplayIconRepeat = showPasswordRepeat ? EyeHide : EyeShow;

    const handleVisibility = () => {
        setShowPasswordNew((b) => !b);
    };

    const handleVisibilityRepeat = () => {
        setShowPasswordRepeat((b) => !b);
    };

    const handleSubmit = async (values: IInitialValuesProps) => {
        await createNewPassword({ secretCode: secretCode, password: values.passwordRepeat })
            .unwrap()
            .then((response: IPasswordChangeResponse) => {
                if (response.message === PASSWORD_UPDATE_SUCCESS_MESSAGES.REQUEST_UPDATED) {
                    setIsPasswordChangedSuccessfully(true);
                } else {
                    setIsPasswordChangedWithError(true);
                }
            })
            .catch(() => {
                setIsPasswordChangedWithError(true);
            });
    };

    return (
        <div className={styles.recoveryBlock}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ isValid, dirty }) => (
                    <Form className={styles.form}>
                        <Typography variant="h2" className={styles.title}>
                            Восстановление пароля
                        </Typography>
                        <DisplayIcon
                            viewBox="0 0 24 24"
                            className={styles.eye}
                            type="button"
                            onClick={handleVisibility}
                        />
                        <Input name="passwordNew" type={showPasswordNew ? 'text' : 'password'} label="Новый пароль" />
                        <DisplayIconRepeat
                            viewBox="0 0 24 24"
                            className={styles.eye}
                            type="button"
                            onClick={handleVisibilityRepeat}
                        />
                        <Input
                            name="passwordRepeat"
                            type={showPasswordRepeat ? 'text' : 'password'}
                            label="Повторите пароль"
                        />
                        <Button variant="primary" className={styles.button} disabled={!isValid || !dirty}>
                            Сменить пароль
                        </Button>
                    </Form>
                )}
            </Formik>
            {isPasswordChangedSuccessfully && (
                <ModalWindowPassword
                    alt="success"
                    setIsOpen={setIsPasswordChangedSuccessfully}
                    navigate={() => navigate('/home/authorization')}
                />
            )}
            {isPasswordChangedWithError && (
                <ModalWindowPassword alt="error" setIsOpen={setIsPasswordChangedWithError} />
            )}
        </div>
    );
};
