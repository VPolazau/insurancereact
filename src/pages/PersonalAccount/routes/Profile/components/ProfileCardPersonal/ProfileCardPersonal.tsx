import React, { ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';

import { Card, CardHeader, CardBody, Typography, Input, Button } from '../../../../../../components';
import { selectUserData } from '../../../../../../redux/slices/user';
import { formatPhoneNumber } from '../../../../../../utils/formatPhoneNumber';
import { IUpdateUserResponse } from '../../../../../../redux/injectsApi/typesApi';

import { validationSchema } from './yupSchema';

import styles from './styles.module.css';

export const ProfileCardPersonal = () => {
    const user = useSelector(selectUserData);
    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        birthday: user.birthday,
        email: user.email,
        mobilePhone: formatPhoneNumber(user.mobilePhone),
    };

    const handleChangeInput = (
        e: ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: string) => void,
        mobilePhone: string
    ) => {
        if (mobilePhone.length === 0) {
            setFieldValue('mobilePhone', `+7 ${e.target.value}`);
        } else if (mobilePhone.length === 3 && mobilePhone.length < e.target.value.length) {
            setFieldValue('mobilePhone', (e.target.value += ' ('));
        } else if (mobilePhone.length === 6 && mobilePhone.length < e.target.value.length) {
            setFieldValue('mobilePhone', (e.target.value += ' '));
        } else if (mobilePhone.length === 10 && mobilePhone.length < e.target.value.length) {
            setFieldValue('mobilePhone', (e.target.value += ' '));
        } else {
            setFieldValue('mobilePhone', e.target.value);
        }
    };

    const handleSubmit = (values: IUpdateUserResponse) => {
        // eslint-disable-next-line
        console.log(values);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ isValid, dirty, setFieldValue, values }) => (
                    <Form>
                        <Card className={styles.card}>
                            <CardHeader>
                                <Typography variant="h3">Личные данные</Typography>
                            </CardHeader>
                            <CardBody className={styles.body}>
                                <Input className={styles.lastName} name="lastName" label="Фамилия" disabled={true} />
                                <div className={styles.block}>
                                    <Input className={styles.firstName} name="firstName" label="Имя" disabled={true} />
                                    <Input
                                        className={styles.middleName}
                                        name="middleName"
                                        label="Отчество"
                                        disabled={true}
                                    />
                                    <Input
                                        className={styles.birthday}
                                        name="birthday"
                                        label="Дата рождения"
                                        disabled={true}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={styles.card}>
                            <CardHeader>
                                <Typography variant="h3">Контакты</Typography>
                            </CardHeader>
                            <CardBody className={styles.contacts}>
                                <Input name="email" label="Электронная почта" disabled={true} />
                                <Input
                                    name="mobilePhone"
                                    label="Телефон"
                                    onChange={(e) => handleChangeInput(e, setFieldValue, values.mobilePhone)}
                                    disabled={true}
                                />
                            </CardBody>
                        </Card>
                        <div className={styles.btnContainer}>
                            <Button
                                type="submit"
                                variant="primary"
                                className={styles.btnSave}
                                disabled={!isValid || !dirty}
                            >
                                Сохранить
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
