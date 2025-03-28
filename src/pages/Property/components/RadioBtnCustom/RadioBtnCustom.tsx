import { useMemo } from 'react';

import { Typography } from '../../../../components';

import styles from './styles.module.css';
import stylesCustom from './stylesCustom.module.css';

interface IRadioBtn {
    title: string;
    name: string;
    value: string;
    selected: string;
    onChange: (value: string) => void;
    pointer?: boolean;
}

const RadioBtnCustom = ({ title, name, value, selected, onChange, pointer }: IRadioBtn) => {
    const isChecked = useMemo(() => selected === value, [selected, value]);
    const handleChange = () => onChange(value);
    return (
        <label className={pointer ? styles.label : stylesCustom.label}>
            {pointer && <Typography variant="medium">{title}</Typography>}
            <input
                type="radio"
                className={pointer ? styles.input : stylesCustom.input}
                value={value}
                name={name}
                checked={isChecked}
                onChange={handleChange}
                data-testid={value}
            />
            {pointer ? (
                <span className={styles.span} />
            ) : (
                <span className={stylesCustom.span}>
                    <Typography variant="medium">{title}</Typography>
                </span>
            )}
        </label>
    );
};

export default RadioBtnCustom;
