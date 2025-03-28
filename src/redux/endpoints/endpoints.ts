export const ENDPOINTS = {
    login: '/login',
    logout: '/logout',
    registration: {
        newUser: '/registration/user/new',
        checkUser: '/registration',
        confirmEmail: '/registration/email/confirmation',
    },
    password: {
        changePassword: '/password',
        resetPassword: '/reset_password',
        forgotPassword: '/forgot_password',
    },
    notification: {
        push: '/notifications/push',
        email: '/notifications/email',
    },
    user: '/user_info',
};
