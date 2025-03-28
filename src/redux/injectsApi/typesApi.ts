/**
 * passwordChange injectApi
 */

export interface IChangePasswordProps {
    oldPassword: string;
    newPassword: string;
}

export interface IPasswordChangeResponse {
    message: string;
}

/**
 * login injectApi
 */

export interface IAuthorizationData {
    username: string;
    password: string;
}

export interface IAuthorizationResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IUserData {
    username: string;
    password: string;
}

export interface IUserResponse {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    mobilePhone: string;
    birthday: string;
    emailNotification: boolean;
    pushNotification: boolean;
    tgNotification: boolean;
    registrationDate: string;
}

/**
 * logout injectApi
 */

export interface ILogoutResponse {
    message: string;
}

/**
 * passwordRestore injectApi
 */

export interface IEmailRequest {
    email: string;
}
export interface IEmailData {
    message: string;
}

export interface IPasswordRequest {
    secretCode: string | null;
    password: string;
}
export interface IPasswordData {
    message: string;
}

export interface IRestorePasswordError {
    status: number;
    data: {
        errorMessage: string[];
    };
}

/**
 * registration injectApi
 */

export interface IRegistrationData {
    password: string;
    mobilePhone: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    birthday: string;
}

export interface IRegistrationResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IEmailConfirmationRequest {
    secret_code: string;
}

export interface IEmailConfirmationResponse {
    isEmailConfirmed: boolean;
}

export interface IRegistrationError {
    status: number;
    data: {
        errorMessage: string[];
    };
}

/**
 * notifications injectApi
 */

export interface IPushRequest {
    pushNotification: boolean;
}
export interface IPushData {
    message: string;
}
export interface IEmailNotificationRequest {
    notificationStatus: boolean;
}
export interface IEmailNotificationData {
    message: string;
}

/**
 * user injectApi
 */

export interface IUserResponse {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    mobilePhone: string;
    birthday: string;
    emailNotification: boolean;
    pushNotification: boolean;
    tgNotification: boolean;
    registrationDate: string;
}

/**
 * updateUser injectApi
 */

export interface IUpdateUserRequest {
    userId: string;
}

export interface IUpdateUserResponse {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    mobilePhone: string;
    birthday: string;
}
