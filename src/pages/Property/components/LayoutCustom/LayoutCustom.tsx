/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Layout } from '../../../../components';
import NavTags from '../NavTags/NavTags';

import styles from './style.module.css';

const LayoutCustom = ({ tags, children }: any) => {
    return (
        <Layout title="Страхование квартиры" className={styles.layoutInsurance}>
            <NavTags tags={tags} />
            {children}
        </Layout>
    );
};

export default LayoutCustom;
