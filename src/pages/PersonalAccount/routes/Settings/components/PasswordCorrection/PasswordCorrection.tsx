import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Castle } from '../../../../../../assets/icons';
import { Typography, Button } from '../../../../../../components';
import { InputPassword } from '../InputPassword';
import { useChangePasswordMutation } from '../../../../../../redux/injectsApi';

import { schema } from './yupSchema';
import styles from './styles.module.css';

interface IPasswordCorrection {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormData {
    actualPassword: string;
    newPassword: string;
    repeatNewPassword: string;
}

export const PasswordCorrection: React.FC<IPasswordCorrection> = ({ setIsOpen, setIsSuccess }) => {
    const [isEnteredPasswordCorrect, setIsEnteredPasswordCorrect] = useState(true);
    const [checkPassword] = useChangePasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const handleInputFocus = () => {
        setIsEnteredPasswordCorrect(true);
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            devices.forEach((device) => {});
        });
    };

    const handleFormClose = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const handleFormSubmit: SubmitHandler<IFormData> = async (formData) => {
        await checkPassword({
            oldPassword: formData.actualPassword,
            newPassword: formData.newPassword,
        })
            .unwrap()
            .then(() => {
                setIsSuccess(true);
                setIsOpen(false);
                reset();
            })
            .catch(() => {
                setIsEnteredPasswordCorrect(false);
            });
    };

    const passwordValidateMSG = (msg: string) => (
        <Typography variant="small" className={styles.errors}>
            {msg}
        </Typography>
    );

    return (
        <div className={styles.container}>
            <Castle viewBox="0 0 82 81" className={styles.castle} />

            <div className={styles.title}>
                <Typography variant="h3">Обновить пароль</Typography>
                <Typography variant="h4">Введите текущий и новый пароль</Typography>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
                <div className={styles.block}>
                    <Typography variant="emphasis">Текущий пароль</Typography>
                    <InputPassword
                        onFocus={handleInputFocus}
                        {...register('actualPassword')}
                        isError={errors.actualPassword || !isEnteredPasswordCorrect}
                    />
                    {(errors.actualPassword?.message && passwordValidateMSG(errors.actualPassword?.message)) ||
                        (!isEnteredPasswordCorrect && passwordValidateMSG('Неверные данные'))}
                </div>
                <div className={styles.block}>
                    <Typography variant="emphasis">Новый пароль</Typography>
                    <InputPassword {...register('newPassword')} isError={errors.newPassword} />
                    {errors.newPassword?.message && passwordValidateMSG(errors.newPassword?.message)}
                </div>
                <div className={styles.block}>
                    <Typography variant="emphasis">Подтверждение нового пароля</Typography>
                    <InputPassword {...register('repeatNewPassword')} isError={errors.repeatNewPassword} />
                    {errors.repeatNewPassword?.message && passwordValidateMSG(errors.repeatNewPassword?.message)}
                </div>
                <div className={styles.btns}>
                    <button onClick={handleFormClose} className={styles.btnClose}>
                        <Typography variant="medium">Отмена</Typography>
                    </button>
                    <Button variant="primary">
                        <Typography variant="medium" className={styles.btnSave}>
                            Сохранить
                        </Typography>
                    </Button>
                </div>
            </form>
        </div>
    );
};
