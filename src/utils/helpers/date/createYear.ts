import { createDate } from './createDate';
import { createMonth } from './createMonth';

interface ICreateYearParams {
    year?: number;
    monthNumber?: number;
    locale?: string;
}

export const createYear = (params?: ICreateYearParams) => {
    const locale = params?.locale ?? 'default';

    const monthCount = 12;
    const today = createDate();

    const year = params?.year ?? today.year;
    const monthNumber = params?.monthNumber ?? today.monthNumber;

    const month = createMonth({ date: new Date(year, monthNumber - 1), locale });

    const getMonth = (monthIndex: number) =>
        createMonth({ date: new Date(year, monthIndex), locale }).createMonthDays();

    const createYearMonths = () => {
        const monthes = [];

        for (let i = 0; i < monthCount; i++) {
            monthes[i] = getMonth(i);
        }

        return monthes;
    };
    return {
        createYearMonths,
        month,
        year,
    };
};
