import { getWeekNumber } from './getWeekNumber';
interface ICreateDateParams {
    locale?: string;
    date?: Date;
}
export const createDate = (params?: ICreateDateParams) => {
    const locale = params?.locale ?? 'default';
    const d = params?.date ?? new Date();

    const dayNumber = d.getDate();
    const dayShort = d.toLocaleDateString(locale, { weekday: 'short' });
    const dayNumberInWeek = d.getDay() + 1;
    const year = d.getFullYear();
    const month = d.toLocaleDateString(locale, { month: 'long' });
    const monthNumber = d.getMonth() + 1;
    const monthIndex = d.getMonth();
    const timestamp = d.getTime();
    const week = getWeekNumber(d);

    return { date: d, dayNumber, dayShort, dayNumberInWeek, year, month, monthNumber, monthIndex, timestamp, week };
};
