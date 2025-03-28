import * as yup from 'yup';

// eslint-disable-next-line no-control-regex
const pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])[A-Za-z0-9#?!@$%^&*-]{8,20}$/;
const passwordValidateMSG =
    'Пароль должен содержать от 8 до 20 символов, в том числе цифры, прописные, строчные буквы и спецсимвол (a-zA-Z0-9#?!@$%^&*-)';
const passwordRepeatValidateMSG = 'Поле обязательно для заполнения';

export const validationSchema = yup
    .object({
        passwordNew: yup.string().matches(pattern, passwordValidateMSG).required(passwordValidateMSG),
        passwordRepeat: yup
            .string()
            .required(passwordRepeatValidateMSG)
            .oneOf([yup.ref('passwordNew')], 'Подтверждение не совпадает с паролем'),
    })
    .required();
