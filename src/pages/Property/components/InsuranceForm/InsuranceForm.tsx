import { useCallback, useState } from 'react';

import { Calendar } from '../../../../components/Calendar';
import { NewInput } from '../../../../components/NewInput';
import { Select } from '../../../../components/Select/Select';
import { CalendarIcon } from '../../../../assets/icons';
import { Button, Checkbox } from '../../../../components';

import { FormBlock } from './FormBlock/FormBlock';

import cl from './InsuranceForm.module.scss';

export const InsuranceForm = () => {
    const [isCalendarOpen, setCalendarOpen] = useState(false);

    const handleCalendar = useCallback(() => {
        setCalendarOpen((prevState) => !prevState);
    }, []);

    const selectOptions = [
        { value: 'мужской', label: 'Мужской' },
        { value: 'женский', label: 'Женский' },
    ];

    return (
        <form className={cl.form}>
            <FormBlock title="Страхователь">
                <NewInput label="Фамилия" className={cl.twoColumn} required={true} />
                <NewInput label="Имя" required={true} />
                <NewInput label="Отчество" required={true} />
                <div className={cl.inputCalendar}>
                    <NewInput label="Дата рождения" required={true} icon={<CalendarIcon onClick={handleCalendar} />} />
                    {isCalendarOpen && (
                        <Calendar
                            className={cl.calendar}
                            selectedDate={new Date()}
                            selectDate={() => {}}
                            setIsOpenCalendar={handleCalendar}
                            firstWeekDay={2}
                            yearsInterval={{ start: 2023, count: 100 }}
                        />
                    )}
                </div>
                <Select options={selectOptions} required={true} label="Пол" />
            </FormBlock>
            <FormBlock title="Контактные данные">
                <NewInput type="email" label="Электронная почта" required={true} />
                <NewInput type="tel" label="Телефон" required={true} />
            </FormBlock>
            <FormBlock title="Паспортные данные">
                <NewInput label="Кем выдан" required={true} className={cl.twoColumn} />
                <NewInput label="Серия и номер паспорта" required={true} />
                <NewInput label="Дата выдачи" required={true} />
            </FormBlock>
            <FormBlock title="Объем страхования">
                <NewInput label="Регион" required={true} className={cl.twoColumn} />
                <NewInput label="Город" required={true} />
                <NewInput label="Район" required={true} />
                <NewInput label="Улица" required={true} />
                <NewInput label="Номер дома" required={true} />
                <NewInput label="Корпус" />
                <NewInput label="Квартира" required={true} />
            </FormBlock>
            <Checkbox
                title="Я принимаю условия обработки персональных данных"
                name="accept"
                checked={false}
                onChange={() => {}}
                className={cl.checkbox}
            />
            <div className={cl.buttonWrapper}>
                <Button
                    variant="primary"
                    disabled={false}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    children="Отправить заявку"
                />
                <Button variant="secondaryM" children="Назад" />
            </div>
        </form>
    );
};
