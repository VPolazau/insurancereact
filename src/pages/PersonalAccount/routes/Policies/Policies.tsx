import { Outlet, useLocation } from 'react-router-dom';

import { Layout } from '../../../../components';

import styles from './styles.module.css';

export const Policies = () => {
    const policiesTags = [
        { tag: 'Страховые полисы', path: 'insurance-policies' },
        { tag: 'Заявки на страхование', path: 'insurance-requests', count: 2 },
        { tag: 'Страховой случай', path: 'insurance-case' },
    ];

    const { pathname } = useLocation();

    return (
        <Layout
            className={
                // eslint-disable-next-line no-constant-condition
                pathname === '/account/policies/insurance-case' || '/account/policies/insurance-case/property'
                    ? styles.settingsLayout
                    : ''
            }
            title={pathname === '/account/policies/insurance-policies/property' ? 'Имущество' : 'Полисы'}
            isBtnBack={pathname === '/account/policies/insurance-policies/property' && true}
            tags={pathname === '/account/policies/insurance-policies/property' ? null : policiesTags}
        >
            <Outlet />
        </Layout>
    );
};
