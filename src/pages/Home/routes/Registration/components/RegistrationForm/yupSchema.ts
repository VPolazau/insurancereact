import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('Поле обязательно для заполнения')
        .matches(/^[ЁёА-я-]+$/, 'Некорректное имя')
        .max(40, 'Имя должно содержать от 1 до 40 символов'),
    lastName: Yup.string()
        .required('Поле обязательно для заполнения')
        .matches(/^[ЁёА-я-]+$/, 'Некорректная фамилия')
        .max(40, 'Фамилия должна содержать от 1 до 40 символов'),
    middleName: Yup.string()
        .matches(/^[ЁёА-я-]+$/, 'Некорректное отчество')
        .max(40, 'Отчество должно содержать от 1 до 40 символов'),
    birthday: Yup.string()
        .required('Поле обязательно для заполнения')
        .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/, 'Некорректная дата рождения')
        .test('validDate', function (value) {
            const { path } = this;
            if (!value) return this.createError({ path, message: 'Поле обязательно для заполнения' });

            const [day, month, year] = value.split('/').map(Number);

            const selectedDate: Date = new Date(year, month - 1, day);
            selectedDate.setHours(0, 0, 1);

            const minDate: Date = new Date();
            minDate.setHours(0, 0, 0);
            minDate.setFullYear(minDate.getFullYear() - 118); // Минимальный возраст - 118 лет

            const maxDate: Date = new Date();
            maxDate.setFullYear(maxDate.getFullYear() - 18); // Максимальный возраст - 18 лет

            if (selectedDate < minDate || selectedDate > maxDate || selectedDate.getMonth() + 1 !== month) {
                const formatDate = (date: Date): string => {
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const year = date.getFullYear();
                    return `${day}.${month}.${year}`;
                };

                const minDateString: string = formatDate(minDate);
                const maxDateString: string = formatDate(maxDate);

                return this.createError({
                    path,
                    message: `Допустимые значения в диапазоне от ${minDateString} до ${maxDateString}`,
                });
            }

            return true;
        }),
    username: Yup.string()
        .min(3, 'Длина логина должна быть 3-32 символа')
        .max(32, 'Длина логина должна быть 3-32 символа')
        .required('Поле обязательно для заполнения')
        .matches(/^[a-zA-Z0-9_-]{3,32}$/, 'Допустимые символы  (a-zA-Z0-9_-)'),
    email: Yup.string()
        .matches(/^[a-zA-Z0-9_.-]{2,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Некорректный адрес электронной почты')
        .required('Поле обязательно для заполнения'),
    password: Yup.string()
        .matches(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])[A-Za-z0-9#?!@$%^&*-]{8,20}$/,
            'Пароль должен содержать от 8 до 20 символов, в том числе цифры, прописные, строчные буквы и спецсимвол (a-zA-Z0-9#?!@$%^&*-)'
        )
        .required('Поле обязательно для заполнения'),
    confirmPassword: Yup.string()
        .test('passwords-match', 'Пароль не совпадает', function (value) {
            const { password } = this.parent;

            if (!password && !value) return true;

            return value === password;
        })
        .required('Поле обязательно для заполнения'),
    mobilePhone: Yup.string()
        .required('Поле обязательно для заполнения')
        .matches(/^\+7\d{10}$/, 'Некорректный номер телефона'),
    agreeRules: Yup.bool().oneOf([true]),
});
