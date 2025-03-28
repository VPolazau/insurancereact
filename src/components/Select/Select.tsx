import CustomSelect, { Props as SelectProps, StylesConfig } from 'react-select';

import cl from './Select.module.scss';

interface CustomSelectProps extends SelectProps {
    label?: string;
}

const customStyles: StylesConfig = {
    container: (provided, state) => ({
        ...provided,
        ':hover': {
            borderColor: '#646464',
        },
    }),

    valueContainer: (provided) => ({
        ...provided,
        height: '56px',
    }),
    control: (provided, state) => {
        return {
            ...provided,
            borderColor: state.isFocused ? '#22c062' : '#646464',
            boxShadow: state.isFocused ? '0 0 0 1px #22c062' : 'none',
            borderRadius: '8px',
            ':hover': {
                borderColor: state.isFocused ? '#22c062' : '#646464',
                boxShadow: state.isFocused ? '0 0 0 1px #22c062' : 'none',
            },
        };
    },
    indicatorSeparator: () => ({
        display: 'none',
    }),
    option(base, state) {
        return {
            ...base,
            backgroundColor: '#FCFFFE',
            color: state.isSelected ? '#22C062' : '#1F1D1D',
            ':hover': {
                backgroundColor: '#22C062',
                color: '#FCFFFE',
            },
        };
    },
};

export const Select = ({ label = 'Пол', options = [], required = true, ...rest }: CustomSelectProps) => {
    return (
        <div className={cl.select}>
            {label && (
                <label className={cl.label}>
                    {label} {required && <span>*</span>}
                </label>
            )}
            <CustomSelect placeholder={null} styles={customStyles} required={required} options={options} {...rest} />
        </div>
    );
};
