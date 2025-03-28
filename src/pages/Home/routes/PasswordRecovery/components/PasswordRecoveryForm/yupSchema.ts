import * as yup from 'yup';

const emailsRegExp = /^(?!.*?-)([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required('Некорректный адрес электронной почты')
        .max(30, 'Некорректный адрес электронной почты')
        .min(2, 'Некорректный адрес электронной почты')
        .email('Некорректный адрес электронной почты')
        .matches(emailsRegExp, 'Некорректный адрес электронной почты'),
});
