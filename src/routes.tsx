import { Navigate, RouteObject } from 'react-router-dom';

import {
    Home,
    InProgress,
    NotFound404,
    PersonalAccount,
    Policies,
    PoliciesCase,
    PoliciesInsurance,
    PoliciesRequests,
    Notifications,
    NotificationsMessages,
    NotificationsNews,
    Profile,
    Settings,
    ResponseMail,
    PoliciesInsuranceProperty,
    Registration,
    Authorization,
    PasswordRecovery,
    EmailConfirmation,
    TestPage,
} from './pages';
import Property from './pages/Property/Property';
import ApartmentInsure from './pages/Property/routes/ApartmentInsure/ApartmentInsure';

import { PasswordRecoveryForm, PasswordEntryForm } from './pages/Home/routes/PasswordRecovery/components';
import HouseInsure from './pages/Property/routes/HouseInsure/HouseInsure';
import { RegistrationForm } from './pages/Home/routes/Registration';

export const routes: RouteObject[] = [
    // { path: '/', element: <Navigate to="/test" /> },
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/test', element: <TestPage /> },
    {
        path: '/home',
        element: <Home />,
        children: [
            { path: 'authorization', element: <Authorization /> },
            {
                path: 'registration',
                element: <Registration />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="registration-form" />,
                    },
                    { path: 'registration-form', element: <RegistrationForm /> },
                    { path: 'email-confirmation', element: <EmailConfirmation /> },
                ],
            },
            {
                path: 'reset-password',
                element: <PasswordRecovery />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="email" />,
                    },
                    { path: 'email', element: <PasswordRecoveryForm /> },
                    { path: 'password-confirmation', element: <PasswordEntryForm /> },
                ],
            },
        ],
    },
    {
        path: '/account',
        element: <PersonalAccount />,
        children: [
            { index: true, element: <Navigate to="policies" /> },
            {
                path: 'policies',
                element: <Policies />,
                children: [
                    { index: true, element: <Navigate to="insurance-policies" /> },
                    { path: 'insurance-policies', element: <PoliciesInsurance /> },
                    { path: 'insurance-policies/property', element: <PoliciesInsuranceProperty /> },
                    { path: 'insurance-requests', element: <PoliciesRequests /> },
                    { path: 'insurance-case', element: <PoliciesCase /> },
                ],
            },
            { path: 'settings', element: <Settings /> },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'notifications',
                element: <Notifications />,
                children: [
                    { index: true, element: <Navigate to="messages" /> },
                    {
                        path: 'messages',
                        element: <NotificationsMessages />,
                    },
                    { path: 'messages/:id', element: <ResponseMail /> },
                    { path: 'news', element: <NotificationsNews /> },
                ],
            },
        ],
    },
    {
        path: '/property',
        element: <Property />,
        children: [
            { index: true, element: <Navigate to="apartment" /> },
            { path: 'apartment', element: <ApartmentInsure /> },
            { path: 'house', element: <HouseInsure /> },
        ],
    },
    { path: '/in-progress', element: <InProgress /> },
    { path: '*', element: <NotFound404 /> },
];
