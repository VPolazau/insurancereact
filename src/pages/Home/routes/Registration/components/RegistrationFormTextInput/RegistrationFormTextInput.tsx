import { useFormik } from 'formik';

import { Typography } from '../../../../../../components';

import styles from './styles.module.css';

interface IProps {
    label: string;
    formik: ReturnType<typeof useFormik>;
    name: string;
    value?: string;
    className?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegistrationFormTextInput: React.FC<IProps> = ({ label, name, formik, ...props }) => {
    return (
        <div className={styles.formControl}>
            <label className={styles.label}>
                <Typography variant="emphasis">{label}</Typography>
            </label>
            <input
                type="text"
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                className={`${styles.inputField} ${formik.touched[name] && formik.errors[name] ? styles.error : ''}`}
                {...props}
            />
            {formik.touched[name] && formik.errors[name] && (
                <Typography variant="small" className={styles.errorMessage}>
                    {formik.errors[name] as string}
                </Typography>
            )}
        </div>
    );
};
