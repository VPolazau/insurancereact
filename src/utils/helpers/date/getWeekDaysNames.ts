import { createDate } from './createDate';

export const getWeekDaysNames = (firstWeekDay: number = 1, locale: string = 'default') => {
    const weekDaysNames: {
        dayNumber: ReturnType<typeof createDate>['dayNumber'];
        dayShort: ReturnType<typeof createDate>['dayShort'];
    }[] = Array.from({ length: 7 });

    const d = new Date();

    weekDaysNames.forEach((_, i) => {
        const { dayNumber, dayNumberInWeek, dayShort } = createDate({
            locale,
            date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + i),
        });

        weekDaysNames[dayNumberInWeek - 1] = { dayNumber, dayShort };
    });

    return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)];
};
