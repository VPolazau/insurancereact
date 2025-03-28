import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    username: yup.string().required('Поле обязательно для заполнения'),
    password: yup.string().required('Поле обязательно для заполнения'),
});
