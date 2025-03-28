import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DropDownList } from '../DropDownList';
import { NAVIGATION_DROP_LINKS } from '../../../../utils/constants';

import styles from './styles.module.css';

export const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const handleSpecialButtonClick = () => {
        navigate('/account/policies/insurance-case');
    };

    return (
        <nav className={styles.navbar} data-testid="navbarComponent">
            <div className={styles.menu}>
                {NAVIGATION_DROP_LINKS.map(({ mainLinkPath, mainLinkValue, dropNavLinks }) => (
                    <DropDownList
                        key={mainLinkValue}
                        mainLinkPath={mainLinkPath}
                        mainLinkValue={mainLinkValue}
                        dropNavLinks={dropNavLinks}
                    />
                ))}
            </div>

            <button className={styles.buttonSpecial} onClick={handleSpecialButtonClick}>
                Страховой случай
            </button>
        </nav>
    );
};
