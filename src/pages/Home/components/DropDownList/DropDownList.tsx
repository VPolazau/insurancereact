import React from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

export interface IDropDownList {
    className?: string;
    mainLinkPath: string;
    mainLinkValue: string;
    dropNavLinks: {
        dropLinkPath: string;
        dropLinkValue: string;
    }[];
}
export const DropDownList: React.FC<IDropDownList> = ({ className, mainLinkPath, mainLinkValue, dropNavLinks }) => {
    return (
        <div className={styles.dropDownListBasic} data-testid="dropDownList">
            <NavLink to={mainLinkPath} className={styles.dropDownMainLink}>
                {mainLinkValue}
            </NavLink>
            <div className={styles.dropDownContent}>
                {dropNavLinks.map(({ dropLinkPath = '/', dropLinkValue }) => (
                    <NavLink key={dropLinkValue} to={dropLinkPath} className={cn(styles.dropDownText, className)}>
                        {dropLinkValue}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
