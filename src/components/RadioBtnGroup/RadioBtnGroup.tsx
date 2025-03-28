import { useState } from 'react';

import { RadioBtn } from '../RadioBtn';

import styles from './styles.module.css';

export type Switcher = 'on' | 'off';

interface IRadioBtnGroup {
    options: { value: string; title: string }[];
    groupName: string;
    selected: Switcher;
    onChange?: (value: Switcher) => void;
    notifyHandler?: (value: boolean) => void;
}

export const RadioBtnGroup = ({ options, groupName, selected, notifyHandler }: IRadioBtnGroup) => {
    const [selectedValue, setSelectedValue] = useState<string>(selected);
    const handleRadioBtnChange = (value: string) => {
        setSelectedValue(value);
        if (notifyHandler) {
            switch (value) {
                case 'on':
                    notifyHandler(true);
                    break;
                case 'off':
                    notifyHandler(false);
                    break;
            }
        }
    };

    return (
        <div className={styles.radioGroup}>
            {options.map(({ value, title }) => (
                <RadioBtn
                    key={value}
                    name={groupName}
                    title={title}
                    selected={selectedValue}
                    value={value}
                    onChange={handleRadioBtnChange}
                />
            ))}
        </div>
    );
};
