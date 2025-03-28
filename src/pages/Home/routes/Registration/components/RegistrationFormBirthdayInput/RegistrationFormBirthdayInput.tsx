import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { RegistrationFormTextInput } from '../RegistrationFormTextInput';
import { CalendarIcon } from '../../../../../../assets/icons';
import { formatDate } from '../../../../../../utils/helpers/date';
import { Calendar } from '../../../../../../components/Calendar';

import styles from './styles.module.css';

interface IProps {
    label: string;
    formik: ReturnType<typeof useFormik>;
    name: string;
}

export const RegistrationFormBirthdayInput: React.FC<IProps> = ({ label, formik, ...props }) => {
    const [isCalenderOpen, setIsCalenderOpen] = useState(false);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    const [selectedDate, setSelectedDate] = useState(eighteenYearsAgo);
    const handleCalenderClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsCalenderOpen((bool) => !bool);
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;
            if (clickedElement.id === 'dayInCalendar') {
                formik.setFieldValue(props.name, formatDate(selectedDate, 'DD/MM/YYYY'));
            }
            const calendar = document.getElementById('calendar');
            if (
                clickedElement.id !== 'calendarYear' &&
                clickedElement.id !== 'calendarIcon' &&
                !clickedElement.closest('svg')?.id.startsWith('calendar') &&
                !calendar?.contains(clickedElement)
            ) {
                setIsCalenderOpen(false);
            }
        },
        [formik, props.name, selectedDate]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const numbersOnly = value.replace(/[^0-9]/g, '');
        // Форматируем дату как "дд/мм/гггг", добавляя "/" после каждой группы цифр
        let formattedValue = numbersOnly;
        if (numbersOnly.length >= 3) {
            formattedValue = numbersOnly.slice(0, 2) + '/' + numbersOnly.slice(2);
        }
        if (numbersOnly.length >= 5) {
            formattedValue = formattedValue.slice(0, 5) + '/' + formattedValue.slice(5);
        }

        formik.setFieldValue(props.name, formattedValue);
    };

    return (
        <div className={styles.inputWrapper}>
            <RegistrationFormTextInput
                label={label}
                formik={formik}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[props.name]}
                className={`${styles.inputField} ${
                    formik.touched[props.name] && formik.errors[props.name] ? styles.error : ''
                }`}
                {...props}
            />
            <CalendarIcon
                id="calendarIcon"
                className={styles.calendarButton}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                type="button"
                name="calendar"
                onClick={handleCalenderClick}
            />
            {isCalenderOpen && (
                <Calendar
                    selectedDate={selectedDate}
                    selectDate={setSelectedDate}
                    setIsOpenCalendar={setIsCalenderOpen}
                    firstWeekDay={2}
                    className={styles.calendar}
                    yearsInterval={{ start: eighteenYearsAgo.getFullYear(), count: 101 }}
                />
            )}
        </div>
    );
};
