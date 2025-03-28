import { ChangeEvent, useState } from 'react';

import { Typography } from '../Typography';
import CheckboxIcon from '../../assets/icons/checkboxIcon';

import styles from './styles.module.css';

interface CheckboxProps {
    title: string;
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
export const Checkbox = ({ title, checked, name, onChange, className }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
        onChange(e);
    };
    return (
        <div className={className}>
            <label className={styles.label}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    name={name}
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                    data-testid="checkboxComponent"
                />
                <span className={styles.customCheck}>{isChecked && <CheckboxIcon viewBox="0 0 20 20" />}</span>
                <Typography variant="medium">{title}</Typography>
            </label>
        </div>
    );
};
