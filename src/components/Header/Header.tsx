import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PHONE_NUMBER } from '../../utils/constants';
import { CurrentUserMenu } from '../../pages/Home/components';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { MobileMenu } from '../../pages/Home/components/_forMobile/MobileMenu';
import menu_burger from '../../assets/img/menu_burger.svg';
import profile from '../../assets/img/profile.svg';
import { Logo } from '../../assets/icons';
import { useFingerprint } from '../../utils/useFingerprint';
import { setCookie } from '../../utils/cookieHandlers';
import { useAuth } from '../../shared/hooks';

import styles from './styles.module.css';

interface IHeader {
    children?: React.ReactNode;
}

export const Header: React.FC<IHeader> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isAuth = useAuth();

    const hash = useFingerprint();

    const handleLogoClick = () => {
        navigate('/');
    };

    // TODO
    const handleOfficeButtonClick = () => {
        navigate('/in-progress');
    };

    const handleLoginButtonClick = () => {
        navigate('/home/authorization');
        setCookie('fpHash', hash);
    };

    const handleMobileMenuToggle = () => {
        setIsMenuOpen((s) => !s);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <button className={styles.logoButton} onClick={handleLogoClick}>
                    <Logo viewBox="0 0 150 46" className={styles.logo} />
                </button>
                <div className={styles.info}>
                    <Typography variant="small" className={styles.phoneNumber}>
                        {PHONE_NUMBER}
                    </Typography>
                    <div className={styles.buttons}>
                        <Button variant="link" onClick={handleOfficeButtonClick}>
                            Офисы
                        </Button>
                        {isAuth ? (
                            <CurrentUserMenu />
                        ) : (
                            <Button variant="secondary" onClick={handleLoginButtonClick}>
                                Войти
                            </Button>
                        )}
                    </div>
                    <div className={styles.iconButtons}>
                        <IconButton onClick={handleLoginButtonClick} icon={profile} size={44} />
                        <IconButton onClick={handleMobileMenuToggle} icon={menu_burger} size={44} />
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            {children}

            {isMenuOpen && <MobileMenu handleMobileMenuToggle={handleMobileMenuToggle} />}
        </header>
    );
};
