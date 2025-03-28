import * as Yup from 'yup';

// eslint-disable-next-line no-control-regex
const pattern = /^(?=.*\d)(?=^\S*$)(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])[\x00-\x7F]{8,20}$/g;
const passwordValidateMSG =
    'Пароль должен содержать от 8 до 20 символов, в том числе цифры, прописные, строчные буквы и спецсимвол (a-zA-Z0-9#?!@$%^&*-)';

export const schema = Yup.object({
    actualPassword: Yup.string().matches(pattern, passwordValidateMSG).required(),
    newPassword: Yup.string()
        .matches(pattern, passwordValidateMSG)
        .required()
        .notOneOf([Yup.ref('actualPassword')], 'Пароль не должен совпадать с текущим'),
    repeatNewPassword: Yup.string()
        .matches(pattern, passwordValidateMSG)
        .required()
        .oneOf([Yup.ref('newPassword')], 'Подтверждение не совпадает с паролем'),
}).required();
