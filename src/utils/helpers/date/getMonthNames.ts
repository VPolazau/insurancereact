import { createDate } from './createDate';

export const getMonthNames = (locale: string = 'default') => {
    const monthesNames: {
        month: ReturnType<typeof createDate>['month'];
        monthIndex: ReturnType<typeof createDate>['monthIndex'];
    }[] = Array.from({ length: 12 });

    const d = new Date();
    monthesNames.forEach((_, i) => {
        const { month, monthIndex } = createDate({
            locale,
            date: new Date(d.getFullYear(), d.getMonth() + i),
        });
        monthesNames[monthIndex] = { month, monthIndex };
    });

    return monthesNames;
};
