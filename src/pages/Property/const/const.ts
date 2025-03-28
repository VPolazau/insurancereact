export const NAV_TAGS = [
    { tag: 'Расчет', path: '/property/apartment', count: 1 },
    { tag: 'Оформление', path: '/property/house', count: 2 },
];

export const OPTIONS_MOVABLE = [
    { value: 'no', title: 'Нет' },
    { value: 'yes', title: 'Да' },
];

export const OPTIONS_PERIOD = [
    { value: 'perMonth', title: 'Раз в месяц', period: 12 },
    { value: 'perThreeMonth', title: 'Раз в 3 месяца', period: 4 },
    { value: 'perSixMonth', title: 'Раз в 6 месяцев', period: 2 },
    { value: 'perTwelveMonth', title: 'Раз в 12 месяцев', period: 1 },
];

export const INITIAL = {
    AMOUNT_STATE: {
        immovable: 2500000,
        movable: 2000000,
        total: 2500000,
        coefficient: 0.0038,
        amount: 0.0038 * 2500000, // 9500
        amountInPeriod: 0.0038 * 2500000,
        period: 1,
        countMovable: false,
    },
    IMMOVABLE_RANGE: {
        id: 'immovable',
        name: 'immovable',
        min: 900000,
        max: 6000000,
        minText: '900 000',
        maxText: '6 000 000',
        step: 100000,
    },
    MOVABLE_RANGE: {
        id: 'movable',
        name: 'movable',
        min: 200000,
        max: 3000000,
        minText: '200 000',
        maxText: '3 000 000',
        step: 100000,
    },
};
