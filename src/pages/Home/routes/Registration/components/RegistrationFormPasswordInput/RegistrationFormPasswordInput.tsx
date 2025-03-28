import { useState } from 'react';
import { useFormik } from 'formik';

import { Typography } from '../../../../../../components';
import { EyeHide, EyeShow } from '../../../../../../assets/icons';

import styles from './styles.module.css';

interface IProps {
    label: string;
    formik: ReturnType<typeof useFormik>;
    name: string;
}

export const RegistrationFormPasswordInput: React.FC<IProps> = ({ label, name, formik, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const DisplayIcon = showPassword ? EyeHide : EyeShow;

    return (
        <div className={styles.formControl}>
            <label className={styles.label}>
                <Typography variant="emphasis">{label}</Typography>
            </label>

            <input
                type={showPassword ? 'text' : 'password'}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                className={`${styles.inputField} ${formik.touched[name] && formik.errors[name] ? styles.error : ''}`}
                {...props}
            />
            <DisplayIcon viewBox="0 0 24 24" className={styles.eye} type="button" onClick={handleVisibility} />

            {formik.touched[name] && formik.errors[name] && (
                <Typography variant="small" className={styles.errorMessage}>
                    {formik.errors[name] as string}
                </Typography>
            )}
        </div>
    );
};
