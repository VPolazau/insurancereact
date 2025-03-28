import { useMemo } from 'react';

import { Typography } from '../Typography';

import styles from './styles.module.css';

interface IRadioBtn {
    title: string;
    name: string;
    value: string;
    selected: string;
    onChange: (value: string) => void;
}

export const RadioBtn = ({ title, name, value, selected, onChange }: IRadioBtn) => {
    const isChecked = useMemo(() => selected === value, [selected, value]);
    const handleChange = () => onChange(value);
    return (
        <label className={styles.label}>
            <Typography variant="medium">{title}</Typography>
            <input
                type="radio"
                className={styles.input}
                value={value}
                name={name}
                checked={isChecked}
                onChange={handleChange}
            />
            <span className={styles.span} />
        </label>
    );
};
