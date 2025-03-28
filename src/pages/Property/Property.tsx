import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { Footer, Header, Typography } from '../../components';

import styles from './styles.module.css';
import { Breads } from './components/Breads';

const Property = () => {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <NavLink to="/home/property/apartment" className={styles.flex}>
                    <Typography variant="medium" className={styles.navLink}>
                        Имущество
                    </Typography>
                </NavLink>
            </div>
            <Breads />

            <Outlet />
            <Footer />
        </>

        // <Layout title="Страхование квартиры">
        // </Layout>
    );
};

export default Property;
