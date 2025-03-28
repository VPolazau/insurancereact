import { useState } from 'react';

import cn from 'classnames';

import { RadioBtnCustom } from '../RadioBtnCustom';

import styles from './styles.module.css';

export type Switcher = 'on' | 'off';

interface IRadioBtnGroup {
    options: { value: string; title: string }[];
    groupName: string;
    selected: Switcher | string;
    className?: string;
    pointer?: boolean;
    onChange?: (value: string) => void;
}

export const RadioBtnCustomGroup = ({ options, groupName, selected, className, pointer, onChange }: IRadioBtnGroup) => {
    const initialValue = options.find((option) => option.value === selected)?.value || options[0].value || '';
    const [selectedValue, setSelectedValue] = useState<string>(initialValue);
    const handleRadioBtnChange = (value: string) => {
        setSelectedValue(value);
        const title = options.find((option) => option.value === value)?.title;
        if (onChange && title) {
            onChange(title);
        }
    };

    return (
        <div className={cn(styles.radioGroup, className)}>
            {options.map(({ value, title }) => (
                <RadioBtnCustom
                    key={value}
                    name={groupName}
                    title={title}
                    selected={selectedValue}
                    value={value}
                    onChange={handleRadioBtnChange}
                    pointer={pointer}
                />
            ))}
        </div>
    );
};
