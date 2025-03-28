import React, { useEffect, useMemo, useState } from 'react';

import {
    createDate,
    createMonth,
    getMonthNames,
    getMonthNumberOfDays,
    getWeekDaysNames,
} from '../../../utils/helpers/date';
interface IUseCalendar {
    locale?: string;
    selectedDate?: Date;
    firstWeekDay?: number;
    yearsInterval: {
        start: number;
        count: number;
    };
}

const getYearsInterval = (yearsInterval: { start: number; count: number }) => {
    const { start, count } = yearsInterval;
    return [...Array(count)].map((_, idx) => start - idx);
};

export const useCalendar = ({
    firstWeekDay = 2,
    locale = 'default',
    selectedDate: date,
    yearsInterval,
}: IUseCalendar) => {
    const [selectedDate, setSelectedDate] = useState(createDate({ date }));
    const [selectedMonth, setSelectedMonth] = useState(
        createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale })
    );
    const [selectedYear, setSelectedYear] = useState(selectedDate.year);
    const [isDisabled, setIsDisabled] = useState({ left: false, right: false });

    const monthNames = useMemo(() => getMonthNames(locale), [locale]);
    const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), [firstWeekDay, locale]);
    const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth]);
    const selectedYearInterval = useMemo(() => getYearsInterval(yearsInterval), [yearsInterval]);

    useEffect(() => {
        if (!selectedYearInterval.includes(selectedYear - 1)) {
            if (selectedMonth.monthIndex === new Date().getMonth()) setIsDisabled({ left: true, right: false });
        }
        if (!selectedYearInterval.includes(selectedYear + 1)) {
            if (selectedMonth.monthIndex === new Date().getMonth()) setIsDisabled({ left: false, right: true });
        }
    }, [selectedYearInterval, selectedMonth.monthIndex, selectedYear]);

    const calendarDays = React.useMemo(() => {
        const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);
        const prevMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex - 1),
            locale,
        }).createMonthDays();
        const nextMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex + 1),
            locale,
        }).createMonthDays();
        const firstDay = days[0];
        const lastDay = days[monthNumberOfDays - 1];
        const shiftIndex = firstWeekDay - 1;
        const numberOfPrevDays =
            firstDay.dayNumberInWeek - 1 - shiftIndex < 0
                ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
                : firstDay.dayNumberInWeek - 1 - shiftIndex;
        const numberOfNextDays =
            7 - lastDay.dayNumberInWeek + shiftIndex > 6
                ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
                : 7 - lastDay.dayNumberInWeek + shiftIndex;
        const totalCalendarDays = numberOfPrevDays + days.length + numberOfNextDays;
        const result = [];
        for (let i = 0; i < numberOfPrevDays; i++) {
            const inverted = numberOfPrevDays - i;
            result[i] = prevMonthDays[prevMonthDays.length - inverted];
        }
        for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i++) {
            result[i] = days[i - numberOfPrevDays];
        }
        for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i++) {
            result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
        }
        return result;
    }, [days, firstWeekDay, locale, selectedMonth.monthIndex, selectedYear]);

    const onClickArrow = (direction: 'left' | 'right') => {
        setIsDisabled({ left: false, right: false });
        const monthIndex = direction === 'left' ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
        if (monthIndex === -1) {
            const year = selectedYear - 1;
            setSelectedYear(year);
            return setSelectedMonth(createMonth({ date: new Date(year, 11), locale }));
        }
        if (monthIndex === 12) {
            const year = selectedYear + 1;
            setSelectedYear(year);
            return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
        }
        return setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
    };

    return {
        state: {
            calendarDays,
            weekDaysNames,
            monthNames,
            selectedDate,
            selectedMonth,
            selectedYear,
            selectedYearInterval,
            isDisabled,
        },
        callbacks: {
            setSelectedDate,
            setSelectedYear,
            setSelectedMonth,
            onClickArrow,
        },
    };
};
