import React, { useState } from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

import { Typography } from '../../../../../components';
import iconMainDropListUp from '../../../../../assets/img/iconMainDropListUp.svg';
import iconMainDropListDown from '../../../../../assets/img/iconMainDropListDown.svg';
import iconDropListLink from '../../../../../assets/img/iconDropListLink.svg';

import styles from './styles.module.css';

export interface IDropDownListMobile {
    mainLinkPath: string;
    mainLinkValue: string;
    dropNavLinks: {
        dropLinkPath: string;
        dropLinkValue: string;
    }[];
}
export const DropDownListMobile: React.FC<IDropDownListMobile> = ({ mainLinkPath, mainLinkValue, dropNavLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropList = () => {
        setIsOpen((b) => !b);
    };

    return (
        <>
            <div className={styles.dropDownListBasic} onClick={dropList} data-testid="dropDownList">
                <div className={styles.mainLink}>
                    <div className={styles.dropDownMainLink}>
                        <Typography variant="h3">{mainLinkValue}</Typography>
                    </div>
                    <img
                        className={styles.iconMainDropList}
                        src={isOpen ? iconMainDropListUp : iconMainDropListDown}
                        alt="iconLink"
                    />
                </div>
                {isOpen && (
                    <div className={styles.dropDownContent}>
                        <NavLink to={mainLinkPath} className={styles.dropDownMainText}>
                            <Typography variant="h4" className={cn(styles.dropDownText, styles.dropDownMainText)}>
                                {mainLinkValue}
                            </Typography>
                            <img className={styles.iconDropListLink} src={iconDropListLink} alt="iconLink" />
                        </NavLink>
                        {dropNavLinks.map(({ dropLinkPath = '/', dropLinkValue }) => (
                            <NavLink key={dropLinkValue} to={dropLinkPath}>
                                <Typography variant="h4" className={styles.dropDownText}>
                                    {dropLinkValue}
                                </Typography>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
            <hr style={{ width: '100%', height: '1px', backgroundColor: '#E1F9EF' }} />
        </>
    );
};
