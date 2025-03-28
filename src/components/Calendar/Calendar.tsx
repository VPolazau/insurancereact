import React, { useState } from 'react';
import cn from 'classnames';

import { checkDateIsEqual, createDate, createMonth } from '../../utils/helpers/date';
import { Typography } from '..';
import { IconDropListDown } from '../../assets/icons';

import { useCalendar } from './hooks/useCalendar';
import styles from './styles.module.css';
interface ICalendar {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    setIsOpenCalendar: (bool: boolean) => void;
    firstWeekDay?: number;
    className?: string;
    yearsInterval: {
        start: number;
        count: number;
    };
}

export const Calendar: React.FC<ICalendar> = ({
    firstWeekDay,
    locale = 'default',
    selectDate,
    selectedDate,
    setIsOpenCalendar,
    className,
    yearsInterval,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { state, callbacks } = useCalendar({ firstWeekDay, locale, selectedDate, yearsInterval });

    const handleYearList = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleYearSelect = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const newYear = createDate({
            date: new Date(+target.innerHTML, selectedDate.getMonth(), selectedDate.getDate()),
            locale,
        });

        callbacks.setSelectedYear(newYear.year);
        callbacks.setSelectedMonth(createMonth({ date: new Date(newYear.year, newYear.monthIndex), locale }));
        setIsMenuOpen(false);
    };

    return (
        <div id="calendar" className={cn(styles.container, className)}>
            {isMenuOpen && <div className={styles.bgContainer} />}
            {isMenuOpen && (
                <div className={styles.yearsIntervalBox}>
                    {state.selectedYearInterval.map((el) => (
                        <Typography
                            id="calendarYear"
                            key={el}
                            variant="small"
                            className={styles.selectYear}
                            onClick={handleYearSelect}
                        >
                            {el}
                        </Typography>
                    ))}
                </div>
            )}
            <div className={styles.yearBox}>
                <div className={styles.yearBtn} onClick={handleYearList}>
                    <Typography variant="h3" className={styles.headText}>
                        {state.selectedYear}
                    </Typography>
                    {isMenuOpen ? (
                        <IconDropListDown viewBox="-5 -8 24 24" className={styles.iconDropListUp} />
                    ) : (
                        <IconDropListDown viewBox="-5 -8 24 24" className={styles.iconDropListDown} />
                    )}
                </div>
            </div>
            <div className={styles.monthBox}>
                <IconDropListDown
                    viewBox="-5 -9 24 24"
                    className={
                        state.isDisabled.left ? styles.iconDropListDownLeftDisabled : styles.iconDropListDownLeft
                    }
                    onClick={() => !state.isDisabled.left && callbacks.onClickArrow('left')}
                />
                <Typography variant="h3" className={styles.headText}>
                    {state.monthNames[state.selectedMonth.monthIndex].month.charAt(0).toUpperCase() +
                        state.monthNames[state.selectedMonth.monthIndex].month.slice(1)}
                </Typography>
                <IconDropListDown
                    viewBox="-5 -9 24 24"
                    className={
                        state.isDisabled.right ? styles.iconDropListDownRightDisabled : styles.iconDropListDownRight
                    }
                    onClick={() => !state.isDisabled.right && callbacks.onClickArrow('right')}
                />
            </div>
            <div className={styles.weekDaysBox}>
                {state.weekDaysNames.map(({ dayShort }, idx) => (
                    <Typography
                        key={dayShort}
                        variant="small"
                        className={(idx > 4 && styles.weekEnd) || styles.weekDay}
                    >
                        {dayShort.toUpperCase()}
                    </Typography>
                ))}
            </div>
            <div className={styles.daysBox}>
                {state.calendarDays.map((day) => {
                    const isToday = checkDateIsEqual(new Date(), day.date);
                    const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date);
                    const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;
                    return (
                        <Typography
                            id="dayInCalendar"
                            key={`${day.dayNumber}-${day.monthIndex}`}
                            variant="small"
                            onClick={() => {
                                if (isAdditionalDay) {
                                    return;
                                }
                                setIsOpenCalendar(false);
                                callbacks.setSelectedDate(day);
                                selectDate(day.date);
                            }}
                            className={cn(
                                styles.day,
                                isToday ? styles.toDay : '',
                                isSelectedDay ? styles.selectedDay : '',
                                isAdditionalDay ? styles.additionalDay : ''
                            )}
                        >
                            {day.dayNumber}
                        </Typography>
                    );
                })}
            </div>
        </div>
    );
};
