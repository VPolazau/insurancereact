import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { Input, Typography, Checkbox, Button } from '../../../../../../components';
import { EyeHide, EyeShow } from '../../../../../../assets/icons';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import { useAuthorizationMutation } from '../../../../../../redux/injectsApi';
import { IAuthorizationData } from '../../../../../../redux/injectsApi/typesApi';
import { setAuth } from '../../../../../../redux/slices';

import { validationSchema } from './yupSchema';

import styles from './styles.module.css';

const initialValues = {
    username: '',
    password: '',
};

export const AuthorizationForm = () => {
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [auth, { data, isError }] = useAuthorizationMutation();

    const handleVisibility = () => {
        setShowPassword((b) => !b);
    };
    const DisplayIcon = showPassword ? EyeHide : EyeShow;

    const handleSubmit = async (values: IAuthorizationData) => {
        await auth(values).unwrap();
    };

    useEffect(() => {
        if (data) {
            dispatch(setAuth({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
            navigate('/account');
        }
        // eslint-disable-next-line
    }, [data]);

    const handleCheckboxClick = () => {
        setChecked(!checked);
    };

    const handleRegistrationClick = () => {
        navigate('/home/registration');
    };
    return (
        <div className={styles.authorizationBlock}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ isValid, dirty }) => (
                    <Form className={styles.form}>
                        <Typography variant="h2" className={styles.title}>
                            Вход в Личный кабинет
                        </Typography>
                        <div className={styles.blockEmail}>
                            <Input name="username" label="Логин" errors={isError ? [' '] : undefined} />
                            <DisplayIcon
                                viewBox="0 0 24 24"
                                className={styles.eye}
                                type="button"
                                onClick={handleVisibility}
                            />
                            <Input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Пароль"
                                errors={isError ? ['Неправильно указаны логин или пароль'] : undefined}
                            />
                        </div>
                        <div className={styles.blockPrompt}>
                            <div>
                                <label className={styles.blockCheck}>
                                    <Checkbox title="" checked={false} onChange={handleCheckboxClick} name="" />
                                    <Typography variant="medium" className={styles.hoverText}>
                                        Запомнить меня
                                    </Typography>
                                </label>
                            </div>
                            <Link to="/home/reset-password">
                                <Typography variant="medium" className={styles.hoverText}>
                                    Забыли пароль?
                                </Typography>
                            </Link>
                        </div>
                        <div className={styles.blockButton}>
                            <Button
                                type="submit"
                                variant="primary"
                                className={styles.btnLogin}
                                disabled={!isValid || !dirty}
                            >
                                Войти
                            </Button>
                            <Button
                                variant="secondaryM"
                                className={styles.btnRegister}
                                onClick={handleRegistrationClick}
                            >
                                Регистрация
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
