import { ChangeEvent, useMemo } from 'react';

import { Typography } from '../../../../components';

import styles from './styles.module.css';

type Props = {
    id: string;
    name: string;
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    minText: string;
    maxText: string;
};

const Roller = ({
    id,
    name,
    min = 900000,
    max = 6000000,
    value,
    step = 100000,
    onChange,
    minText = '900 000',
    maxText = '6 000 000',
}: Props) => {
    const getBackgroundSize = useMemo(() => {
        const result = (100 * (Number(value) - min)) / (max - min);
        return value ? { backgroundSize: `${result}% 100%` } : { backgroundSize: 0 };
    }, [value, max, min]);

    return (
        <div className={styles['wrapper']}>
            <div className={styles['range']}>
                <input
                    id={id}
                    max={max}
                    min={min}
                    name={name}
                    className={styles['slider']}
                    onChange={onChange}
                    step={step}
                    style={getBackgroundSize}
                    type="range"
                    value={value}
                    data-testid="roller"
                />
            </div>
            {minText && maxText ? (
                <div className={styles['range--span']}>
                    <Typography variant="small">{minText} ₽</Typography>
                    <Typography variant="small">{maxText} ₽</Typography>
                </div>
            ) : null}
        </div>
    );
};

export default Roller;
