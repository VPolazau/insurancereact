import { Layout } from '../../../../components';

import { ProfileCardPersonal } from './components';
import styles from './styles.module.css';

export const Profile = () => {
    return (
        <Layout title="Мой профиль" className={styles.profile}>
            <ProfileCardPersonal />
        </Layout>
    );
};
