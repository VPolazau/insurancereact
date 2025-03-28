import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { Typography } from '../../../../../../components';
import { CheckboxIcon } from '../../../../../../assets/icons';

import styles from './styles.module.css';

interface IProps {
    formik: ReturnType<typeof useFormik>;
    name: string;
}

export const RegistrationFormCheckboxInput: React.FC<IProps> = ({ name, formik }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        formik.setFieldValue(name, checked);
    };

    return (
        <div className={styles.formControl}>
            <label>
                <input
                    type="checkbox"
                    name={name}
                    checked={formik.values[name]}
                    onChange={handleChange}
                    className={styles.checkbox}
                />
                <div className={styles.itemsContainer}>
                    <span className={styles.customCheck}>
                        {formik.values[name] && <CheckboxIcon viewBox="0 0 20 20" />}
                    </span>
                    {name === 'agreeRules' ? (
                        <Typography variant="medium">
                            Я{' '}
                            <Link to="/in-progress" className={styles.checkboxLink}>
                                ознакомлен/а с правилами регистрации в web-приложении.{' '}
                            </Link>
                            Я предоставляю{' '}
                            <Link to="/in-progress" className={styles.checkboxLink}>
                                согласие{' '}
                            </Link>
                            на сбор и обработку предоставленных данных.
                        </Typography>
                    ) : (
                        <Typography variant="medium">
                            Я согласен получать информационные сообщения и предложения на электронную почту
                        </Typography>
                    )}
                </div>
            </label>
        </div>
    );
};
