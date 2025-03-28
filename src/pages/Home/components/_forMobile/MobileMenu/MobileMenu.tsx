import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { DropDownListMobile } from '../DropDownListMobile';
import { Typography } from '../../../../../components';
import { NAVIGATION_DROP_LINKS } from '../../../../../utils/constants';
import phone from '../../../../../assets/img/phone.svg';

import styles from './styles.module.css';

interface IMobileMenu {
    handleMobileMenuToggle: React.MouseEventHandler;
}

export const MobileMenu: React.FC<IMobileMenu> = ({ handleMobileMenuToggle }) => {
    // const [animateBack, setAnimateBack] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const startY = useRef<number | null>(null);
    const [translateY, setTranslateY] = useState(0);

    // const handleCloseMenu = () => {
    //     setAnimateBack((b) => !b);
    //     setTimeout(handleMobileMenuToggle, 400);
    // };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const target = e.target as HTMLDivElement;

        // Только если пользователь начинает жест в верхней части шторки
        if (target.dataset.role === "drag-area") {
            startY.current = touch.clientY;
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startY.current !== null) {
            const touch = e.touches[0];
            const deltaY = touch.clientY - startY.current;

            // Ограничиваем движение вниз
            if (deltaY > 0) {
                setTranslateY(deltaY);
            }
        }
    };

    const handleTouchEnd = () => {
        if (startY.current !== null) {
            // Закрываем, если шторка сместилась больше 100px
            if (translateY > 100) {
                setIsOpen(false);
                // setAnimateBack((b) => !b);
                // setTimeout(handleMobileMenuToggle, 400);
            }
            // Возвращаем в исходное состояние
            setTranslateY(0);
            startY.current = null;
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                zIndex: 10,
                bottom: 0,
                left: 0,
                right: 0,
                height: isOpen ? "50%" : "0",
                backgroundColor: "white",
                transition: isOpen ? "none" : "height 0.3s",
                transform: `translateY(${translateY}px)`,
                boxShadow: isOpen ? "0 -2px 10px rgba(0,0,0,0.2)" : "none",
            }}
        >
            <div>
                <div className={styles.transparentBG} />
                <div
                    data-role="drag-area"
                    className={styles.titleBox}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <Typography variant="h3" className={styles.title}>
                        Menu
                    </Typography>
                </div>
                <div className={styles.menuBody}>
                    <div className={styles.menuList}>
                        {NAVIGATION_DROP_LINKS.map(({ mainLinkPath, mainLinkValue, dropNavLinks }) => (
                            <DropDownListMobile
                                key={mainLinkValue}
                                mainLinkPath={mainLinkPath}
                                mainLinkValue={mainLinkValue}
                                dropNavLinks={dropNavLinks}
                            />
                        ))}
                    </div>
                    <NavLink to="/in-progress">
                        <Typography variant="h3">Страховой случай</Typography>
                    </NavLink>
                    <div className={styles.menuFooter}>
                        <NavLink to="/in-progress" className={styles.link}>
                            <Typography variant="medium">Офисы</Typography>
                        </NavLink>
                        <hr style={{ width: '100%', height: '1px', backgroundColor: '#E1F9EF', margin: '16px 0' }} />
                        <div className={styles.phone}>
                            <img className={styles.iconPhone} src={phone} alt="iconButton" />
                            <span>
                                <Typography variant="medium">+7 (495) 177 - 37 - 37</Typography>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
