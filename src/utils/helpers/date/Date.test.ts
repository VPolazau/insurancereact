import { checkDateIsEqual } from './checkDateIsEqual';
import { createDate } from './createDate';
import { createMonth } from './createMonth';
import { createYear } from './createYear';
import { formatDate } from './formatDate';
import { getMonthNames } from './getMonthNames';
import { getMonthNumberOfDays } from './getMonthNumberOfDays';
import { getWeekDaysNames } from './getWeekDaysNames';
import { getWeekNumber } from './getWeekNumber';

describe('checkDateIsEqual function', () => {
    it('should be equal', () => {
        const date1 = new Date(1997, 11, 17);
        const date2 = new Date(1997, 11, 17);

        const isEqual = checkDateIsEqual(date1, date2);

        expect(isEqual).toEqual(true);
    });

    it('should be not equal', () => {
        const date1 = new Date(1997, 11, 17);
        const date2 = new Date(1990, 11, 17);

        const isEqual = checkDateIsEqual(date1, date2);

        expect(isEqual).toEqual(false);
    });
});

describe('createDate function', () => {
    it('should return object with properties', () => {
        const date = createDate();
        expect(date).toHaveProperty('date');
        expect(date).toHaveProperty('dayNumber');
        expect(date).toHaveProperty('dayShort');
        expect(date).toHaveProperty('dayNumberInWeek');
        expect(date).toHaveProperty('year');
        expect(date).toHaveProperty('month');
        expect(date).toHaveProperty('monthNumber');
        expect(date).toHaveProperty('monthIndex');
        expect(date).toHaveProperty('timestamp');
        expect(date).toHaveProperty('week');
    });
});

describe('createMonth function', () => {
    it('should return object with properties', () => {
        const date = createMonth();
        expect(date).toHaveProperty('getDay');
        expect(date).toHaveProperty('monthName');
        expect(date).toHaveProperty('monthIndex');
        expect(date).toHaveProperty('monthNumber');
        expect(date).toHaveProperty('year');
        expect(date).toHaveProperty('createMonthDays');

        expect(typeof date.getDay).toBe('function');
        expect(typeof date.createMonthDays).toBe('function');
    });

    it('should return object with correct values', () => {
        const date = createMonth({ date: new Date(1997, 11, 17), locale: 'ru-RU' });
        const monthDays = date.createMonthDays();

        expect(date.monthIndex).toEqual(11);
        expect(date.monthName).toEqual('декабрь');
        expect(date.monthNumber).toEqual(12);
        expect(date.year).toEqual(1997);

        expect(Array.isArray(monthDays)).toBe(true);
        expect(monthDays.length).toEqual(31);
    });
});

describe('createYear function', () => {
    it('should return object with properties', () => {
        const date = createYear();
        expect(date).toHaveProperty('createYearMonths');
        expect(date).toHaveProperty('month');

        expect(typeof date.month).toBe('object');
        expect(date.month).toHaveProperty('createMonthDays');
        expect(date.month).toHaveProperty('getDay');
        expect(date.month).toHaveProperty('monthIndex');
        expect(date.month).toHaveProperty('monthName');
        expect(date.month).toHaveProperty('monthNumber');
        expect(date.month).toHaveProperty('year');

        expect(date).toHaveProperty('year');

        expect(typeof date.createYearMonths).toBe('function');
    });

    it('should return correct values', () => {
        const date = createYear({ year: 1997, monthNumber: 12, locale: 'ru-RU' });
        const yearMonths = date.createYearMonths();

        expect(date.year).toEqual(1997);

        expect(date.month.monthIndex).toEqual(11);
        expect(date.month.monthName).toEqual('декабрь');
        expect(date.month.monthNumber).toEqual(12);
        expect(date.month.year).toEqual(1997);

        expect(Array.isArray(yearMonths)).toBe(true);
        expect(yearMonths.length).toEqual(12);
    });
});

describe('formatDate function', () => {
    it('should return formated date', () => {
        const rawDate = new Date(1997, 11, 17);
        const formatedDate = formatDate(rawDate, 'DD.MM.YYYY');
        expect(formatedDate).toEqual('17.12.1997');
    });
});

describe('getMonthNames function', () => {
    it('should return correct array', () => {
        const names = getMonthNames('ru-RU');
        expect(Array.isArray(names)).toEqual(true);
        expect(names.length).toEqual(12);

        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toHaveProperty('month');
            expect(names[i]).toHaveProperty('monthIndex');
        }
    });

    it('should return array without arguments', () => {
        const names = getMonthNames();
        expect(Array.isArray(names)).toEqual(true);
        expect(names.length).toEqual(12);

        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toHaveProperty('month');
            expect(names[i]).toHaveProperty('monthIndex');
        }
    });

    it('should contain correct months', () => {
        const names = getMonthNames('ru-RU');

        expect(names[0].month).toEqual('январь');
        expect(names[0].monthIndex).toEqual(0);

        expect(names[1].month).toEqual('февраль');
        expect(names[1].monthIndex).toEqual(1);

        expect(names[2].month).toEqual('март');
        expect(names[2].monthIndex).toEqual(2);

        expect(names[3].month).toEqual('апрель');
        expect(names[3].monthIndex).toEqual(3);

        expect(names[4].month).toEqual('май');
        expect(names[4].monthIndex).toEqual(4);

        expect(names[5].month).toEqual('июнь');
        expect(names[5].monthIndex).toEqual(5);

        expect(names[6].month).toEqual('июль');
        expect(names[6].monthIndex).toEqual(6);

        expect(names[7].month).toEqual('август');
        expect(names[7].monthIndex).toEqual(7);

        expect(names[8].month).toEqual('сентябрь');
        expect(names[8].monthIndex).toEqual(8);

        expect(names[9].month).toEqual('октябрь');
        expect(names[9].monthIndex).toEqual(9);

        expect(names[10].month).toEqual('ноябрь');
        expect(names[10].monthIndex).toEqual(10);

        expect(names[11].month).toEqual('декабрь');
        expect(names[11].monthIndex).toEqual(11);
    });
});

describe('getMonthNumberOfDays function', () => {
    it('should return correct number days in month', () => {
        const numbers = getMonthNumberOfDays(0, 2023);
        expect(numbers).toEqual(31);
    });

    it('should work without year argument', () => {
        const numbers = getMonthNumberOfDays(0);
        expect(numbers).toEqual(31);
    });
});

describe('getWeekDaysNames function', () => {
    it('should return correct array', () => {
        const names = getWeekDaysNames(0, 'ru-RU');
        expect(Array.isArray(names)).toEqual(true);
        expect(names.length).toEqual(7);

        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toHaveProperty('dayNumber');
            expect(names[i]).toHaveProperty('dayShort');
        }
    });

    it('should use default locale', () => {
        const names = getWeekDaysNames();
        expect(names.length).toEqual(7);
    });

    it('should return correct oreder of days', () => {
        const names = getWeekDaysNames(2, 'ru-RU');

        expect(names[0].dayShort).toBe('пн');
        expect(names[1].dayShort).toBe('вт');
        expect(names[2].dayShort).toBe('ср');
        expect(names[3].dayShort).toBe('чт');
        expect(names[4].dayShort).toBe('пт');
        expect(names[5].dayShort).toBe('сб');
        expect(names[6].dayShort).toBe('вс');
    });
});

describe('getWeekNumber function', () => {
    it('should work correctly with border values', () => {
        let weekNumber = getWeekNumber(new Date(1997, 0, 1));
        expect(weekNumber).toEqual(1);

        weekNumber = getWeekNumber(new Date(1997, 11, 31));
        expect(weekNumber).toEqual(53);
    });
});
