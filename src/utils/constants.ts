import boy from '../assets/img/boy.svg';
import car from '../assets/img/car.svg';

import { INotificationMessage } from '../redux/slices/user/types';

export interface Slides {
    title: string;
    subtitle: string;
    image?: string;
}

export const SLIDES: Slides[] = [
    {
        title: 'Защитите свою квартиру от&nbsp;неожиданных ситуаций',
        subtitle: 'получите страховку не&nbsp;выходя из&nbsp;дома',
        image: boy,
    },
    {
        title: 'Защитите свой автомобиль с&nbsp;нашей страховкой',
        subtitle: 'надежное покрытие от&nbsp;непредвиденных&nbsp;рисков!',
        image: car,
    },
];

export const CARDS = [
    {
        title: 'Широкий спектр услуг',
        description: 'Мы&nbsp;заботимся о&nbsp;Вашей безопасности',
    },
    {
        title: 'Чат поддержки',
        description: 'Получайте быстро и&nbsp;удобно ответы на&nbsp;вопросы',
    },
    {
        title: 'Личный кабинет',
        description: 'Управляйте своей&nbsp;страховкой легко и&nbsp;удобно',
    },
    {
        title: 'Выгодное предложение',
        description: 'Страховая сумма больше, а&nbsp;взнос&nbsp;меньше',
    },
];

export const PLACEHOLDERS = {
    policies: {
        title: 'У&nbsp;Вас пока нет заявок на&nbsp;страхование',
        subTitle:
            'В&nbsp;данном разделе&nbsp;Вы можете найти всю важную информацию, связанную с&nbsp;Вашими заявками на&nbsp;страхование и&nbsp;их&nbsp;статусами',
        buttonText: 'Оформить',
    },
    requests: {
        title: 'У&nbsp;Вас пока нет активных страховых полисов',
        subTitle:
            'Оформите страховой полис, и&nbsp;получите быстрый и&nbsp;удобный доступ ко&nbsp;всей информации о&nbsp;своих полисах в&nbsp;любое удобное для Вас время',
        buttonText: 'Оформить',
    },
    notifications: {
        title: 'У&nbsp;Вас пока нет уведомлений',
        subTitle:
            'В&nbsp;данном разделе&nbsp;Вы можете найти всю важную информацию, связанную с&nbsp;Вашими страховыми полисами, изменениями в&nbsp;Вашем профиле и&nbsp;новостями компании',
        buttonText: 'На главную',
    },
};

// TODO поменять все /in-progress на реальные страницы
export const NAVIGATION_DROP_LINKS = [
    {
        mainLinkPath: '/in-progress',
        mainLinkValue: 'Авто',
        dropNavLinks: [
            { dropLinkPath: '/in-progress', dropLinkValue: 'КАСКО' },
            { dropLinkPath: '/in-progress', dropLinkValue: 'ОСАГО' },
        ],
    },
    {
        mainLinkPath: '/in-progress',
        mainLinkValue: 'Имущество',
        dropNavLinks: [
            { dropLinkPath: '/property/apartment', dropLinkValue: 'Квартира' },
            { dropLinkPath: '/in-progress', dropLinkValue: 'Дом' },
        ],
    },
    {
        mainLinkPath: '/in-progress',
        mainLinkValue: 'Здоровье',
        dropNavLinks: [
            { dropLinkPath: '/in-progress', dropLinkValue: 'ДМС' },
            { dropLinkPath: '/in-progress', dropLinkValue: 'Страхование жизни' },
        ],
    },
    {
        mainLinkPath: '/in-progress',
        mainLinkValue: 'Отдых',
        dropNavLinks: [{ dropLinkPath: '/in-progress', dropLinkValue: 'Страхование путешественников' }],
    },
];

// TODO currentUser это будет пользователь полученный с бэка. "Выход" добавить роут на страницу авторизации
export const USER_DROP_LINKS = {
    currentUser: 'Максим Максимов',
    dropNavLinks: [
        { dropLinkPath: '/account', dropLinkValue: 'Личный кабинет' },
        { dropLinkPath: '/account/policies', dropLinkValue: 'Полисы' },
        { dropLinkPath: '/account/profile', dropLinkValue: 'Мой профиль' },
        { dropLinkPath: '/account/settings', dropLinkValue: 'Настройки' },
        { dropLinkPath: '/', dropLinkValue: 'Выход' },
    ],
};

export const PHONE_NUMBER: string = '+7 (495) 177 - 37 - 37';
export const MAIN_OFFICE_ADDRESS: string = 'г. Москва. Одесская улица 10, 5 этаж, офис 13';
export const COPYRIGHT = '&copy;&nbsp;2023 &nbsp;&laquo;My&nbsp;Insurance&raquo;';
export const IN_PROGRESS =
    'Уважаемые посетители, извините за&nbsp;неудобства, но&nbsp;наш сайт находится в&nbsp;активной разработке.';
export const EMAIL_CONFIRMED = 'Ваш email подтвержден!';

// TODO имитация карточек страховых полисов
export const INSURANCE_CARDS = [
    {
        id: '1',
        property: 'Квартира',
        type: 'Имущество',
        address: 'г. Москва, ул. Зеленоградская, д.102, к.5, кв 135',
        policyNumber: 'WIOO12357909',
        policyValidity: '01.01.2023-01.01.2024',
        policyCost: '17 000 ₽',
        paymentAmount: '8 500 ₽',
        paymentFrequency: 'Раз в 6 месяцев',
    },
    // Дополнительные объекты карточек полисов
];

// TODO имитация списка страховых заявок
export const REQUESTS = [
    {
        id: 1,
        type: 'Страхование квартиры',
        number: 2536324,
        created: '02.11.2022',
        status: 'approved',
        review: '2 дня',
        response: true,
        extension: true,
    },
    {
        id: 2,
        type: 'Страхование дома',
        number: 2834324,
        created: '02.11.2022',
        status: 'rejected',
        review: '2 дня',
        response: true,
    },
    {
        id: 3,
        type: 'КАСКО',
        number: 3534324,
        created: '02.11.2022',
        status: 'pending',
        review: '2 дня',
        response: false,
    },
];

// Имитация уведомлений в модалке
export const NOTIFICATIONS: INotificationMessage[] = [
    {
        id: '1',
        type: 'Страхование квартиры',
        title: 'Ваша заявка на «Страхование квартиры» одобрена',
        date: '04.11.2022',
        isRead: false,
        message:
            'Мы рады сообщить Вам, что Ваша заявка на страхование квартиры была рассмотрена и одобрена. Благодарим за проявленный интерес к нашей компании и надеемся на долгосрочное взаимодействие.',
    },
    {
        id: '2',
        type: 'Страхование дома',
        title: 'Ваша заявка на «Страхование дома» отклонена',
        date: '05.09.2022',
        isRead: false,
        message:
            'Уважаемый Константин Александрович! К сожалению, мы не можем удовлетворить вашу заявку на страхование дома...',
    },
    {
        id: '3',
        type: 'Смена пароля',
        title: 'Ваш пароль успешно изменен',
        date: '05.09.2022',
        isRead: true,
        message: 'Здравствуйте! Мы рады сообщить Вам, что пароль для вашей учетной записи был успешно изменен',
    },
];

export const RadioBtns = [
    { value: 'on', title: 'Вкл' },
    { value: 'off', title: 'Выкл' },
];

export const CONFIRM_POPUP_TITLES = {
    request: 'Вы действительно хотите отозвать&nbsp;заявку?',
    notification: 'Вы действительно хотите удалить&nbsp;уведомление?',
};

// TODO контент модалки ответа
export const RESPONSE_POPUP_CONTENT = {
    commonText: {
        title: 'Добрый день!',
        signature: 'С&nbsp;уважением, компания MyInsurance',
    },
    approved: {
        message:
            'Мы&nbsp;рады сообщить, что Ваша заявка на&nbsp;&laquo;Страхование&nbsp;квартиры&raquo; была рассмотрена и&nbsp;одобрена. Благодарим за&nbsp;проявленный интерес к&nbsp;нашей компании и&nbsp;надеемся на&nbsp;долгосрочное взаимодействие.',
        requisitesTitle: 'Реквизиты для оплаты:',
        requisites: [
            {
                label: 'Название компании',
                value: 'СПАО «My Insurance»',
            },
            {
                label: 'Расчетный счёт',
                value: '40704917073289876529',
            },
            {
                label: 'БИК',
                value: '011111111',
            },
            {
                label: 'ИНН',
                value: '7711111111',
            },
        ],
    },
    rejected: {
        message:
            'Уважаемый Константин Александрович! К&nbsp;сожалению, мы&nbsp;вынуждены сообщить Вам об&nbsp;отказе на&nbsp;заявку &laquo;Страхование дома&raquo;',
        additionalMessage:
            'Если у&nbsp;Вас возникнут дополнительные вопросы или&nbsp;потребности в&nbsp;страховании, пожалуйста, свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;будем рады помочь Вам.',
    },
};

export const INSURANCE_CASE = [
    {
        id: '1',
        type: 'Общая информация',
    },
    {
        id: '2',
        type: 'Имущество',
    },
    {
        id: '3',
        type: 'Здоровье',
    },
    {
        id: '4',
        type: 'Путешествия',
    },
    {
        id: '5',
        type: 'Автострахование',
    },
];
