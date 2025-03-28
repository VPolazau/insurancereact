import React from 'react';
import { useOutlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SLIDES } from '../../utils/constants';
import { Footer, Header } from '../../components';
import { selectAgreementWithCookies } from '../../redux/slices/user/userSlice';

import { Slider, CookiePopup, InfoCardList, Breads, NavBar } from './components';

import styles from './styles.module.css';

export const Home: React.FC = () => {
    const outlet = useOutlet();
    const agreedWithCookies = useSelector(selectAgreementWithCookies);

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            {outlet ? (
                <>
                    <Breads />
                    {outlet}
                </>
            ) : (
                <div className={styles.home}>
                    <Slider slides={SLIDES} />
                    <InfoCardList />
                    {!agreedWithCookies && <CookiePopup />}
                </div>
            )}
            <Footer />
        </>
    );
};
