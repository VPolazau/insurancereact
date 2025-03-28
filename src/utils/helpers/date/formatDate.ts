import { createDate } from './createDate';

export const formatDate = (date: Date, format: string): string => {
    const d = createDate({ date });

    return format
        .replace(/YYYY/, d.year.toString())
        .replace(/MM/, d.monthNumber.toString().padStart(2, '0'))
        .replace(/DD/, d.dayNumber.toString().padStart(2, '0'));
};
